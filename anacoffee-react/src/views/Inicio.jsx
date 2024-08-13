import React from 'react'
import { productos } from '../data/Productos'
import Producto from '../components/Producto'

export default function Inicio() {
  console.log(productos)

  return (
    <>
      <h1 className='text-4xl font-black text-white'>Inicio</h1>
      <p className='text-2xl my-10 text-white'>
        Elige y personaliza tu pedido a continuacion
      </p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {productos.map(producto => (
          <Producto 
            key={producto.id} 
            producto={producto}
            className='bg-white p-10 rounded-lg shadow-md'
          />
        ))}
      </div>
    </>
  )
}
