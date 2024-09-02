import React, { useState } from 'react'
import { createContext } from 'react'
import { categorias as categoriasDB } from '../data/categorias';

const KioskoContext = createContext();

const KioskoProvider = ({children}) => {

  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

  const handleClickCategoria = id => {
    const categoria = categorias.filter(categoria => categoria.id === id)[0];

    setCategoriaActual(categoria);
  };

  return (
    <KioskoContext.Provider
        value={{
            // Add your context values here
          categorias,
          categoriaActual,
          handleClickCategoria
        }}
    >{children}</KioskoContext.Provider>
  )

}

export{
    KioskoProvider
}
export default KioskoContext