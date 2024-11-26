import Header from '@/components/ui/header';
import { useLazyRefreshQuery } from '@/features/auth/authApi';
import { selectIsAuth } from '@/features/auth/authSlice';
import { useAppSelector } from '@/shared/types/redux';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const [refresh] = useLazyRefreshQuery({
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });

  useEffect(() => {
    // initially user is not authorized
    if (!isAuth) {
      refresh();
    }
  }, [isAuth, refresh]);
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default RootLayout;
