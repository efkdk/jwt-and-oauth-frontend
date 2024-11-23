import UserInfo from '@/components/ui/user-info';
import { ToastContainer } from 'react-toastify';

const WelcomePage = () => {
  return (
    <div className="flex flex-col flex-center">
      <h1 className="mb-4 title">Welcome!</h1>
      <p className="mb-4 text-lg font-medium">
        If user data is <code>null</code> try to sign up or log in!
      </p>
      <p className="mb-2">User data:</p>
      <UserInfo />
      <ToastContainer containerId="welcomePageContainer" />
    </div>
  );
};

export default WelcomePage;
