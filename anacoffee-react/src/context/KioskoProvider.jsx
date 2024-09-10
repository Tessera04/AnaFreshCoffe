import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import clienteAxios from '../config/axios';

const KioskoContext = createContext();

const KioskoProvider = ({children}) => {

  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({})
  const [modal, setModal] = useState(false)
  const [producto, setProducto] = useState({})
  const [pedido, setPedido] = useState([])
  const [total, setTotal] = useState([])

  useEffect(() => {
    const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
    setTotal(nuevoTotal)
  }, [pedido])

  const obtenerCategorias = async () => {
    const token = localStorage.getItem('AUTH_TOKEN')

    try {
      const {data} = await clienteAxios('/api/categorias', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setCategorias(data.data)
      setCategoriaActual(data.data[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    obtenerCategorias();
  }, [])

  const handleClickCategoria = id => {
    const categoria = categorias.filter(categoria => categoria.id === id)[0]
    setCategoriaActual(categoria)
  };

  const handleClickModal = () => {
    setModal(!modal)
  };

  const handleSetProducto = producto => {
    setProducto(producto)
  };

  const handleAgregarPedido = ({categoria_id, ...producto}) => {
    if(pedido.some( pedidoState => pedidoState.id === producto.id)) {
      const pedidoActualizado = pedido.map( pedidoState => pedidoState.id === producto.id ? producto : pedidoState )
      setPedido(pedidoActualizado)
      toast.success('Pedido Actualizado!')
    }else{
      setPedido([...pedido, producto])
      toast.success('Agregado al pedido!')
    }
  };

  const handleEditarCantidad = id => {
    const productoActualizar = pedido.filter(producto => producto.id === id)[0]
    setProducto(productoActualizar)
    setModal(!modal)
  };

  const handleEliminarProductoPedido = id => {
    const pedidoActualizado = pedido.filter(producto => producto.id !== id)
    setPedido(pedidoActualizado)
    toast.success('Eliminado del Pedido!')
  };

  const handleSubmitNuevaOrden = async (logout) => {
    const token = localStorage.getItem('AUTH_TOKEN')

    try{
      const {data} = await clienteAxios.post('/api/pedidos',
      {
        total,
        producto: pedido.map(producto => {
          return {
            id: producto.id,
            cantidad: producto.cantidad
          }
        })
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      //Mostrar mensaje de pedido creado con exito
      toast.success(data.message);
      setTimeout(() => {
        setPedido([])
      }, 1000);

      //Cerrar la sesion del usuario
      setTimeout(() => {
        localStorage.removeItem('AUTH_TOKEN');
        logout();
      }, 3000);

    }catch(error){
      console.log(error)
    }
  }

  const handleClickCompletarPedido = async id => {
    const token = localStorage.getItem('AUTH_TOKEN')
    try {
      await clienteAxios.put(`/api/pedidos/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleClickProductoAgotado = async id => {
    const token = localStorage.getItem('AUTH_TOKEN')
    try {
      await clienteAxios.put(`/api/productos/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <KioskoContext.Provider
        value={{
            // Add your context values here
          categorias,
          categoriaActual,
          handleClickCategoria,
          modal,
          handleClickModal,
          producto,
          handleSetProducto,
          pedido,
          setPedido,
          handleAgregarPedido,
          handleEditarCantidad,
          handleEliminarProductoPedido,
          total,
          handleSubmitNuevaOrden,
          handleClickCompletarPedido,
          handleClickProductoAgotado
        }}
    >{children}</KioskoContext.Provider>
  )

}

export{
    KioskoProvider
}
export default KioskoContext