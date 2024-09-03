import React from 'react'
import { useState } from 'react'
import useKiosko from '../hooks/useKiosko'
import { formatearDinero } from '../helpers'

export default function ModalProducto() {

  const { handleClickModal, producto } = useKiosko()
  const [ cantidad, setCantidad ] = useState(1)

  return (
    <div className='md:flex gap-10 bg-ana-white-pink'>
      <div className='md:w-1/3'>
        <img 
          src={`/img/${producto.imagen}.jpg`} 
          alt={`Imagen Producto ${producto.nombre}`}
        />
      </div>

      <div className='md:w-2/3'>
        <div className='flex justify-end'>
          <button onClick={handleClickModal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <h1 className='text-3xl font-bold mt-5'>
          {producto.nombre}
        </h1>

        <p className='mt-5 font-black text-5xl text-ana-black-pink'>
          {formatearDinero(producto.precio)}
        </p>

        <div className='flex gap-4 mt-5'>
          <button
            type='button'
            onClick={() => {
              if(cantidad <= 1) return
              setCantidad(cantidad - 1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clipRule="evenodd" />
            </svg>
          </button>

          <p className='text-3xl text-ana-black-pink'>{cantidad}</p>
          
          <button
            type='button'
            onClick={() => {
              if(cantidad >= 5) return
              setCantidad(cantidad + 1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <button
          type='button'
          className='bg-ana-pink hover:bg-ana-black-pink px-5 py-2 mt-5 text-white font-bold uppercase rounded'
        >
          Agregar al Pedido
        </button>
      </div>
    </div>
  )
}
