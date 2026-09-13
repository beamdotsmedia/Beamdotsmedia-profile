import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <main className="font-sans selection:bg-primary/20">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
