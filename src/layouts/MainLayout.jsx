import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className='h-screen max-w-[400px] mx-auto bg-bg-second'>
      <Outlet />
    </div>
  );
}
