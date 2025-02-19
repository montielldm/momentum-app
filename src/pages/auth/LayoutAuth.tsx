import { Outlet } from 'react-router-dom'

export default function LayoutAuth() {
  return (
    <div className='w-full h-screen p-4'>
      <Outlet />        
    </div>
  )
}
