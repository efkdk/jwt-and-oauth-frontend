import { Link } from 'react-router-dom';
import { Button } from './button';

const Header = () => {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between py-2 header-container">
        <Link className="text-3xl font-medium" to="/">
          JWT AUTH
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
