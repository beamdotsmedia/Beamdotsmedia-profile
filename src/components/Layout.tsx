import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="font-sans selection:bg-primary/20">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
