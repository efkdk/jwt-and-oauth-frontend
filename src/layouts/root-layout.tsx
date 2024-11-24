import Header from '@/components/ui/header';
import { authApi } from '@/features/auth/authApi';
import { selectIsAuth, setIsLoading } from '@/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/shared/types/redux';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
const RootLayout = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // logout in one window but logged in in another window?
  useEffect(() => {
    if (!isAuth) {
      dispatch(setIsLoading(true));
      dispatch(authApi.endpoints.refresh.initiate())
        .unwrap()
        .catch((error) => {
          // localStorage.removeItem('token');
          console.log(error);
          // navigate('/');
        })
        .finally(() => dispatch(setIsLoading(false)));
    }
  }, [dispatch, isAuth, navigate]);
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default RootLayout;
