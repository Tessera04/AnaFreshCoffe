import React from 'react'

export default function Categoria({categoria}) {
  
  const {icono, id, nombre} = categoria

  return (
    <div className='flex items-center gap-4 border w-full p-3 bg-ana-white-pink hover:bg-ana-pink cursor-pointer'>
      <img
        className='w-12'
        src={`/img/icono_${icono}.svg`} 
        alt="Imagen Icono" />

      <p className='text-lg font-bold cursor-pointer truncate'>{nombre}</p>
    </div>
  )
}
