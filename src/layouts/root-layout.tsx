import Header from '@/components/ui/header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default RootLayout;
