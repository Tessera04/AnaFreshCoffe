import React from 'react'
import {Outlet} from 'react-router-dom'
import AdminSidebar from '../components/AdminSidebar'
import { useAuth } from '../hooks/useAuth'

export default function AdminLayout() {
  useAuth({middleware: 'admin'});

  return (
    <div className='md:flex bg-ana-white-pink'>
        <AdminSidebar />

        <main className='flex-1 bg-ana-pink p-5 h-screen overflow-y-scroll no-scrollbar'>
            <Outlet />
        </main>
    </div>
  )
}
