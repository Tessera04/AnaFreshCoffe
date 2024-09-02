import React from 'react'
import useKiosko from '../hooks/useKiosko'
import Categoria from './categoria'
import { categorias } from '../data/categorias'

export default function Sidebar() {

  const {categorias} = useKiosko()

  return (
    <aside className='md:w-72'>
      <div className='p-4'>
        <img 
          className='w-40'
          src="img/logo.svg" 
          alt="Imagen logo"/>
      </div>

      <div className='mt-10'>
        {categorias.map( categoria => (
          <Categoria 
            key={categoria.id}
            categoria={categoria}
          />
        ) )}
      </div>

      <div className='my-5 py-5'>
        <button 
          type='button'
          className='text-center bg-red-500 w-full p-3 font-bold text-white truncate'>
          Cancelar Orden
        </button>
      </div>
    </aside>
  )
}
