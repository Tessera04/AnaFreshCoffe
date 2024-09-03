import { Outlet } from 'react-router-dom'
import Modal from 'react-modal'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import ModalProducto from '../components/ModalProducto'
import useKiosko from '../hooks/useKiosko'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function Layout() {

  const {modal, handleClickModal} = useKiosko();

  console.log(modal)

  return (
    <>
      <div className='md:flex bg-ana-white-pink'>
        <Sidebar />

          <main className='flex-1 bg-ana-pink p-5 h-screen overflow-y-scroll no-scrollbar'>
            <Outlet />
          </main>

        <Resumen />
      </div>

      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>
    </>
  )
}
