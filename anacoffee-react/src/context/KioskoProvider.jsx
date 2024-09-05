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
    try {

      const {data} = await clienteAxios('/api/categorias')
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
          total
        }}
    >{children}</KioskoContext.Provider>
  )

}

export{
    KioskoProvider
}
export default KioskoContext