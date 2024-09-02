import React from 'react'
import useKiosko from '../hooks/useKiosko'

export default function Categoria({categoria}) {
  
  const {handleClickCategoria, categoriaActual} = useKiosko();
  const {icono, id, nombre} = categoria;

  return (
    <div className={`${categoriaActual.id === id ? "bg-ana-black-pink" : "bg-ana-white-pink"}flex items-center gap-4 border w-full p-3 bg-ana-white-pink hover:bg-ana-pink cursor-pointer`}>
      <img
        className='w-12'
        src={`/img/icono_${icono}.svg`} 
        alt="Imagen Icono" />

      <button 
        className='text-lg font-bold cursor-pointer truncate'
        type='button'
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  )
}
