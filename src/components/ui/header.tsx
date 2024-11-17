import { Link } from 'react-router-dom';
import { Button } from './button';

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-6xl py-2 mx-auto">
      <Link className="text-3xl font-medium" to="/">
        React Test
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
    </header>
  );
};

export default Header;
