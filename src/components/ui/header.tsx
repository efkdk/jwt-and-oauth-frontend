import { Link } from 'react-router-dom';
import { Button } from './button';
import LogoutButton from '@/components/containers/logout-button';
import { useAppSelector } from '@/shared/types/redux';
import { selectIsAuth } from '@/features/auth/authSlice';

const Header = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <header className="border-b">
      <div className="flex items-center justify-between py-2 header-container">
        <Link className="text-3xl font-medium" to="/">
          JWT AUTH
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
            {isAuth ? (
              <li>
                <LogoutButton />
              </li>
            ) : (
              <>
                <li>
                  <Button variant="link" size="link">
                    <Link to="/login">Login</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" size="link">
                    <Link to="/signup">Register</Link>
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
