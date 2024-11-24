import { Button } from '@/components/ui/button';
import UserInfo from '@/components/ui/user-info';

const WelcomePage = () => {
  return (
    <div className="flex flex-col flex-center">
      <h1 className="mb-4 title">Welcome!</h1>
      <p className="mb-4 text-lg font-medium">
        If user data is <code>null</code> try to sign up or log in!
      </p>
      <p className="mb-2">User data:</p>
      <UserInfo />
      <Button variant="outline" className="mt-4 text-base">
        Make an authenticated request
      </Button>
    </div>
  );
};

export default WelcomePage;
