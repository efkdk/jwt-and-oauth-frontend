import GoogleButton from '@/components/containers/google-button';
import { Button } from '@/components/ui/button';
import LoginForm from '@/features/auth/login-form';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mt-4 mb-8 title">Log in to your account</h3>
      <div className="flex items-center gap-2 mb-4">
        <p>Don't have an account?</p>
        <Button variant="link" size="link">
          <Link to="/signup">Sign up</Link>
        </Button>
      </div>
      <GoogleButton type="login" className="mb-4" />
      <p className="mb-4">or with email and password</p>
      <div className="form-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
