import React from 'react'
import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';

export default function Login() {

  const emailRef = createRef();
  const passwordRef = createRef();

  const [errores, setErrores] = useState([])
  const { login } = useAuth({
    middleware: 'guest',
    url: '/'
  })

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    login(datos, setErrores)

  }

  return (
    <>
      <h1 className='text-4xl font-black text-ana-black-pink'>Iniciar Sesion</h1>
      <p>Para crear un pedido debes iniciar sesion!</p>

      <div className='bg-ana-pink shadow-md rounded-md mt-10 px-5 py-10'>
        <form onSubmit={handleSubmit} noValidate>
          {errores ? errores.map(error => <Alerta>{error}</Alerta>) : null}

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
                    placeholder='Tu E-mail'
                    ref={emailRef} />
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
                    placeholder='Tu Contraseña'
                    ref={passwordRef} />
            </div>

            <input 
                type="submit"
                value="Iniciar Sesion"
                className='bg-ana-white-pink hover:bg-ana-black-pink text-white hover:text-ana-white-pink w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded'
             />
        </form>
      </div>

      <nav className='mt-5'>
        <Link to="/auth/registro">
            No tienes cuenta? Crea una!
        </Link>
      </nav>
    </>
  )
}
