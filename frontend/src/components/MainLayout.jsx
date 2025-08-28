import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex bg-black min-h-screen'>
        <aside className='m-1 fixed top-0 left-0 '>
            <Navbar/>
        </aside>
        <main className='flex-1 ml-[18vw] mt-1 overflow-y-auto'>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout