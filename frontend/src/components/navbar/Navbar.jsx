import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

import "./navbar.css";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <div className="container">
      {/* <img src={Rectangle1} alt="orange" /> */}
      <Link to="/">Jobfinder</Link>
      <nav>
        {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Logout</button>
          </div>
        )}
        {!user && (
          <div>
            <div>
              <Link to="/register">Register</Link>
            </div>
            <Link to="/login">Login</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
