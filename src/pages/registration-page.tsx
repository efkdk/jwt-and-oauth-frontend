import GoogleButton from '@/components/containers/google-button';
import { Button } from '@/components/ui/button';
import RegistrationForm from '@/features/auth/registration-form';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mt-4 mb-8 title">Create your account</h3>
      <div className="flex items-center gap-2 mb-4">
        <p>Have an account?</p>
        <Button variant="link" size="link">
          <Link to="/login">Log in</Link>
        </Button>
      </div>
      <GoogleButton type="signup" className="mb-4" />
      <p className="mb-4">or with email and password</p>
      <div className="form-container">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
