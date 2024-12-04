import GoogleButton from '@/components/containers/google-button';
import { Button } from '@/components/ui/button';
import RegistrationForm from '@/features/auth/registration-form';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  return (
    <div className="flex justify-center px-4 mt-8">
      <div className="flex flex-col p-8 border-2 border-gray-300 w-[40rem] rounded-xl">
        <h3 className="mb-8 title">Create your account</h3>
        <GoogleButton type="signup" className="self-center mb-4" />
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow border-t border-gray-300" />
          <span className="px-4 text-gray-500">Or with email and password</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>
        <div className="w-full mb-4">
          <RegistrationForm />
        </div>
        <div className="flex gap-2">
          <p>Have an account?</p>
          <Button className="self-center" variant="link" size="link">
            <Link to="/login">Log in</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
