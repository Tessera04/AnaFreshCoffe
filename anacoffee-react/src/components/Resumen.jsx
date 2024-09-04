import React, { useState } from 'react'
import useKiosko from '../hooks/useKiosko'

export default function Resumen() {

  const {pedido} = useKiosko();

  return (
    <aside className='w-72 h-screen overflow-y-scroll p-5'>
      <h1 className='text-4xl font-black text-ana-black-pink'>
        Mi Pedido
      </h1>

      <p className='text-lg my-5 text-ana-black-pink font-bold'>
        Aqui podras ver tu pedido completo
      </p>

      <div className='py-10'>
        {pedido.length === 0 ? (
          <p className='text-center text-2xl'>
            No hay elementos en tu carrito
          </p>
        ) : (
            pedido.map(producto => (
              <ResumenProducto
                key={producto.id}
                producto={producto}
              />
            ))
        )}
      </div>

      <p className='text-xl mt-10'>
        Total: {''}
      </p>

      <form className='w-full'>
        <div className='mt-5'>
          <input 
            type="submit"
            className='bg-ana-pink hover:bg-ana-black-pink px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer'
            value={'Confirmar Pedido'} />
        </div>
      </form>
    </aside>
  )
}
