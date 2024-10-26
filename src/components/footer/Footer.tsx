import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { footerLinks, menuItems } from '../constant';
import Logo from '../../assets/logo/shortlet-logo-dark.png';

const Footer = () => {
  const [active, setActive] = useState('');

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <footer className="container mx-auto h-auto py-20 w-full px-5 lg:px-0">
      <div className="flex flex-wrap gap-5 justify-between items-center lg:justify-between w-full mb-3 lg:gap-0">
        <div>
          <div className="flex justify-center lg:justify-start space-x-1 items-center">
            <Link to={'/'} className="flex items-center space-x-2">
              {/* <Logo className="w-8 h-8 whitespace-nowrap" /> */}
              <Link to={'/'}>
                <img src={Logo} alt="logo" width={120} height={90} />
              </Link>
              <span className="text-lg text-gray-800 font-bold tracking-tight"></span>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-5">
            <h2 className="text-base lg:text-xl text-gray-700">Follow Us:</h2>
            <div className="flex gap-2">
              <span>
                <FaInstagram className="w-6 h-6 text-gray-300" />
              </span>
              <span>
                <FaFacebook className="w-6 h-6 text-gray-300" />
              </span>
              <span>
                <FaTwitter className="w-6 h-6 text-gray-300" />
              </span>
              <span>
                <FaLinkedin className="w-6 h-6 text-gray-300" />
              </span>
              <span>
                <FaYoutube className="w-6 h-6 text-gray-300" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-2 w-full lg:grid-cols-3 gap-8 lg:gap-0 mt-10">
        <div>
          <h2 className="text-2xl text-gray-800 pb-5">Company</h2>
          <ul className="flex flex-col gap-5">
            {menuItems.map((navLink, i) => (
              <li
                key={i}
                className={`text-gray-600 font-light cursor-pointer hover:text-pry ${
                  active.includes(navLink.url) &&
                  'text-pry underline transition duration-300 ease-in-out'
                }`}
                onClick={() => navigate(`/${navLink.url}`)}
              >
                {navLink.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl text-gray-800 pb-5">Legal</h2>
          <ul className="flex flex-col gap-5">
            {footerLinks.map((footerLink, i) => (
              <li
                key={i}
                className={`text-gray-600 font-light cursor-pointer hover:text-pry ${
                  active.includes(footerLink.path) &&
                  'text-pry underline transition duration-300 ease-in-out'
                } `}
                onClick={() => navigate(`/${footerLink.path}`)}
              >
                {footerLink.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1 lg:max-w-md">
          <div className="shadow-lg shadow-pry/10 border p-6 rounded-lg">
            <p className="text-lg font-medium tracking-wide leading-relaxed">
              Location:{' '}
              <span className="text-[#0b252b] text-base font-normal">
                123 Anywhere street,
                <br />
                Lago City, ST 12345 123-456-7890
                <br />
                hello@reallygreatsite.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
