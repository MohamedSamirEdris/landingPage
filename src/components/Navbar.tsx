import { useState } from 'react';
import Logo from '../assets/icons/company_logo.svg';
import toUrlString from '../utils/to-url-string.util';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import the menu icon

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const pages = [
    { name: 'من نحن', path: '/who-we-are' },
    { name: 'المنتجات', path: '/products' },
    // { name: 'الخدمات', path: '/services' },
    { name: 'الأخبار', path: '/latest' },
    { name: 'انضم إلينا', path: '/join-us' },
    { name: ' تواصل معنا', path: '/contact-us' },
  ];

  const onRedirect = (page: string) => {
    const url = toUrlString(page);
    navigate(url);
  };

  return (
    <div className="w-full h-[80px] bg-white border-b fixed top-0 z-50">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img
          src={Logo}
          alt="Company Logo"
          className="h-[45px] mr-10"
          onClick={() => navigate('/')}
        />

        {/* Mobile Menu Icon */}
        <div className="md:hidden sm:flex">
          <FaBars
            className="text-xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex">
          <ul className="flex gap-4">
            {pages.map((page) => (
              <li
                key={page.name}
                onClick={() => onRedirect(page.path)}
                className={location.pathname === page.path ? 'text-[#FD5D63] font-bold' : 'normal'}
              >
                {page.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Language Selector (Desktop) */}
        <div className="hidden md:flex">
          <button className="flex justify-between items-center  bg-transparent  px-6 gap-2">
            English
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="bg-white border-t">
            {pages.map((page) => (
              <li
                key={page.name}
                onClick={() => {
                  onRedirect(page.path);
                  setIsMobileMenuOpen(false); // Close the menu after clicking a link
                }}
              >
                {page.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
