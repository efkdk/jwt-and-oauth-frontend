import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './layouts/root-layout';
import ErrorPage from './pages/error.page';
import WelcomePage from './pages/welcome-page';
import LoginPage from './pages/login-page';
import RegistrationPage from './pages/registration-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegistrationPage />} />
    </Route>,
  ),
);

export default router;
