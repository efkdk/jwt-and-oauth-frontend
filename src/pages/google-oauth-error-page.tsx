import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const GoogleOAuthErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-col h-screen gap-6 px-4 flex-center">
      <p className="text-2xl font-bold text-red-500 sm:text-3xl">
        Oops! Authorization with google failed :(
      </p>
      <p className="text-lg font-medium">Try to log in or sign up with login and password!</p>
      <Button className="text-base" variant="default" onClick={() => navigate('/')}>
        Go back to home
      </Button>
    </div>
  );
};

export default GoogleOAuthErrorPage;
