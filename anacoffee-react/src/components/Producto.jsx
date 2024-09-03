import React from 'react'
import { formatearDinero } from '../helpers'
import useKiosko from '../hooks/useKiosko'

export default function Producto({producto}) {

  const { handleClickModal, handleSetProducto } = useKiosko();

  const {imagen, nombre, precio, categoria_id, id} = producto

  return (
    <div className='rounded p-3 shadow bg-ana-white-pink'>
      <img src={`/img/${imagen}.jpg`} alt={`Imagen ${nombre}`} className='w-full object-cover object-center mb-4' />
      <div>
        <h5 className='text-xl font-bold text-ana-black-pink'>{nombre}</h5>
        
        <p className='pb-4 text-3xl font-bold text-ana-black-pink'>
          {formatearDinero(precio)}
        </p>
      </div>
      <button 
        className='bg-ana-pink hover:bg-ana-black-pink text-white font-bold py-2 px-4 rounded' 
        onClick={() => {
          handleClickModal(id);
          handleSetProducto(producto);
        }}
      >
        Agregar al carrito
      </button>
    </div>
  )
}
