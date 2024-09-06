import React from 'react'
import useSWR from 'swr';
import Producto from '../components/Producto'
import useKiosko from '../hooks/useKiosko';
import clienteAxios from '../config/axios';

export default function Inicio() {

  const { categoriaActual } = useKiosko();

  //Consulta SWR
  const fetcher = () => clienteAxios('/api/productos').then(data => data.data);
  const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
    refreshInterval: 1000, // refresca cada 1 segundo
  });

  if(isLoading) return 'Cargando...'

  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <>
      <h1 className='text-4xl font-black text-white'>{categoriaActual.nombre}</h1>
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
