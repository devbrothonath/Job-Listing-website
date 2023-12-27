import { Link } from "react-router-dom";

import "./navbar.css"

const Navbar = () => {
    return (
        <div className="container">
            {/* <img src={Rectangle1} alt="orange" /> */}
            <Link to="/">
                Jobfinder
            </Link>
            <nav>
                <div>
                    <Link to="/register">
                        Register
                    </Link>
                </div>
                <div>
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;