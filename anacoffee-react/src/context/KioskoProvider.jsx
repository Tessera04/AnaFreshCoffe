import React from 'react'
import { createContext, useState } from 'react'
import { categorias as categoriasDB } from '../data/categorias';

const KioskoContext = createContext();

const KioskoProvider = ({children}) => {

  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0])
  const [modal, setModal] = useState(false)
  const [producto, setProducto] = useState({})

  const handleClickCategoria = id => {
    const categoria = categorias.filter(categoria => categoria.id === id)[0]
    
    setCategoriaActual(categoria)
  };

  const handleClickModal = () => {
    setModal(!modal)
  };

  const handleSetProducto = producto => {
    setProducto(producto)
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
          handleSetProducto
        }}
    >{children}</KioskoContext.Provider>
  )

}

export{
    KioskoProvider
}
export default KioskoContext