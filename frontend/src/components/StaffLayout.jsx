import { Outlet } from 'react-router-dom'
import StaffNav from './StaffNav'

const StaffLayout = () => {
  return (
    <div className='flex bg-fuchsia-50 min-h-screen'>
        {/* Sidebar */}
        <aside className='m-1 fixed top-0 left-0'>
            <StaffNav />
        </aside>

        {/* Main Content */}
        <main className='flex-1 ml-[17vw] overflow-y-auto p-6'>
            <Outlet />
        </main>
    </div>
  )
}

export default StaffLayout
