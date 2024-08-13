import React from 'react'
import { Link } from 'react-router-dom'

export default function Registro() {
  return (
    <>
      <h1 className='text-4xl font-black text-ana-black-pink'>Crea tu cuenta!</h1>
      <p>Crea tu cuenta llenando el formulario</p>

      <div className='bg-ana-pink shadow-md rounded-md mt-10 px-5 py-10'>
        <form action="">

            <div className='mb-4'>
                <label 
                    className='text-white' 
                    htmlFor="name">
                        Nombre:
                </label>
                <input 
                    type="text"
                    id='name'
                    className='mt-2 w-full p-3 bg-gray-50 rounded'
                    name='name'
                    placeholder='Tu Nombre' />
            </div>

            <div className='mb-4'>
                <label 
                    className='text-white' 
                    htmlFor="email">
                        Email:
                </label>
                <input 
                    type="text"
                    id='email'
                    className='mt-2 w-full p-3 bg-gray-50 rounded'
                    name='email'
                    placeholder='Tu E-mail' />
            </div>

            <div className='mb-4'>
                <label 
                    className='text-white' 
                    htmlFor="password">
                        Contraseña:
                </label>
                <input 
                    type="password"
                    id='password'
                    className='mt-2 w-full p-3 bg-gray-50 rounded'
                    name='password'
                    placeholder='Tu Contraseña' />
            </div>

            <div className='mb-4'>
                <label 
                    className='text-white' 
                    htmlFor="password_confirmation">
                        Repetir Contraseña:
                </label>
                <input 
                    type="password"
                    id='password_confirmation'
                    className='mt-2 w-full p-3 bg-gray-50 rounded'
                    name='password_confirmation'
                    placeholder='Repetir contraseña' />
            </div>

            <input 
                type="submit"
                value="Crear Cuenta"
                className='bg-ana-white-pink hover:bg-ana-black-pink text-white hover:text-ana-white-pink w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded'
             />
        </form>
      </div>

      <nav className='mt-5'>
        <Link to="/auth/login">
            Ya tienes cuenta? Inicia Sesion!
        </Link>
      </nav>
    </>
  )
}
