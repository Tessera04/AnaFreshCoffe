import React from 'react'
import { productos as data } from '../data/Productos'
import Producto from '../components/Producto'
import useKiosko from '../hooks/useKiosko';

export default function Inicio() {

  const { categoriaActual } = useKiosko();

  const productos = data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <>
      <h1 className='text-4xl font-black text-white'>{categoriaActual.nombre}</h1>
      <p className='text-2xl my-10 text-white'>
        Elige y personaliza tu pedido a continuacion
      </p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {data.map(producto => (
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
