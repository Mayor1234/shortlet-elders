import { Outlet, ScrollRestoration } from 'react-router-dom';

import Footer from '../components/footer/Footer';

const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
    // </div>
  );
};

export default Layout;
