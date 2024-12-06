import GoogleButton from '@/components/containers/google-button';
import { Button } from '@/components/ui/button';
import LoginForm from '@/features/auth/login-form';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center px-4 mt-8">
      <div className="flex flex-col max-w-3xl p-8 border-2 border-gray-300 w-[40rem] rounded-xl">
        <h3 className="mb-8 title">Log in to your account</h3>
        <GoogleButton type="login" className="self-center mb-4" />
        <div className="flex items-center justify-center my-4">
          <div className="line" />
          <span className="px-4 text-gray-500">Or with email and password</span>
          <div className="line" />
        </div>
        <div className="w-full mb-4">
          <LoginForm />
        </div>
        <div className="flex gap-2">
          <p>Don't have an account?</p>
          <Button className="self-center" variant="link" size="link">
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
