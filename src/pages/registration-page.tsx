import RegistrationForm from '@/features/auth/registration-form';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-8 title">Create your account</h3>
      <p>
        Have an account? <Link to="/login">Log in now</Link>
      </p>
      <p>with google</p>
      <div>or with email and password</div>
      <div className="form-container">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
