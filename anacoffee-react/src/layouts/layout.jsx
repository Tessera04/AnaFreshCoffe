import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'

export default function Layout() {
  return (
    <div className='md:flex bg-ana-white-pink'>
      <Sidebar />

        <main className='flex-1 bg-ana-pink p-5 h-screen overflow-y-scroll'>
          <Outlet />
        </main>

      <Resumen />
    </div>
  )
}
