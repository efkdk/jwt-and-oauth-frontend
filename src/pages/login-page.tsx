import LoginForm from '@/components/containers/login-form';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-8 title">Log in to your account</h3>
      <p>
        Don't have an account? <Link to="/registration">Sign up</Link>
      </p>
      <p className="">login with google</p>
      <div className="flex">
        <p className="">or with email and password</p>
      </div>
      <div className="w-1/2">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
