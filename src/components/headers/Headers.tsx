import { useEffect, useState } from 'react';

import Logo1 from '../../assets/logo/shortlet-logo.png';
import Logo2 from '../../assets/logo/shortlet-logo-dark.png';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from '../constant';
import { motion, AnimatePresence, useCycle } from 'framer-motion';

const Header = () => {
  const [navScroll, setNavScroll] = useState(false);
  const [modalOpen, setModalOpen] = useCycle(false, true);
  const [active, setActive] = useState('');

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const changeScroll = () => {
    if (window.scrollY >= 80) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeScroll);

    return () => {
      window.removeEventListener('scroll', changeScroll);
    };
  }, []);

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const modalVariants = {
    hidden: {
      y: '-100vh',
    },
    visible: {
      y: 0,
      transition: {
        type: 'tween', // Set transition type to 'tween'
        duration: 0.3, // Specify duration
      },
    },
    exit: {
      y: '-100vh',
      transition: {
        type: 'tween',
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: '50%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut', // Add ease-out easing function
      },
    },
    exit: {
      opacity: 0,
      y: '50%',
      transition: {
        duration: 0.1,
        ease: 'easeOut', // Add ease-out easing function
      },
    },
  };

  const navLinksVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <div
      className={`${
        navScroll ? 'bg-[#29454e]/50 bg-blend-overlay' : 'bg-transparent'
      } w-full sticky top-0`}
    >
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex justify-between items-center w-full h-20 z-50 border-none text-[#fff]">
          <div className="text-white">
            <Link to={'/'}>
              {navScroll ? (
                <img src={Logo2} alt="logo" width={150} height={100} />
              ) : (
                <img src={Logo1} alt="logo" width={150} height={100} />
              )}
            </Link>
          </div>
          <nav className="hidden md:flex gap-20">
            <ul className="w-full flex items-center justify-between space-x-8">
              {menuItems.map((menu, i) => (
                <li
                  key={i}
                  className={`${
                    active.includes(menu.url) && 'text-pry'
                  }text-[#fff] font-medium tracking-wide text-lg capitalize cursor-pointer py-2 px-3 hover:text-pry transition duration-300 ease-in-out relative w-fit block after:block after:content-[''] after:absolute after:left-0 after:bottom-0 after:border-b-2 after:border-pry after:bg-pry after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
                >
                  {menu.title}
                </li>
              ))}
            </ul>
          </nav>
          <div className="inset-0 flex w-full h-full items-center justify-center flex-col lg:hidden">
            <div
              className="absolute right-5 top-0 translate-y-1/2 z-50 cursor-pointer"
              onClick={() => setModalOpen()}
            >
              {modalOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 border border-white p-2 rounded-md text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 border border-pry p-2 rounded-md text-pry"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
            <AnimatePresence>
              {modalOpen && (
                <motion.div
                  className="absolute inset-0 z-40 bg-[#0b252b] h-screen w-full"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <nav className="flex flex-col z-50 items-center justify-center w-full h-[80%]">
                    <motion.ul
                      className="flex flex-col gap-10 items-center justify-center h-full w-full"
                      variants={navLinksVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {menuItems.map((navLink, i) => (
                        <motion.li
                          key={i}
                          className="text-lg text-white py-2 px-6 hover:text-white cursor-pointer text-center"
                          variants={linkItemVariants}
                          onClick={() => {
                            navigate(`/${navLink.url}`), setModalOpen();
                          }}
                        >
                          {navLink.title}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
