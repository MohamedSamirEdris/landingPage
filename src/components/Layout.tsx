import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
      <div className='flex-grow mt-10'>
        <Outlet />
        
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
