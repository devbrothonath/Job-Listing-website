import { Link } from "react-router-dom";
import Rectangle1 from "../../assets/Rectangle1.png"
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="container">
            {/* <img src={Rectangle1} alt="orange" /> */}
            <Link to="/">
                Jobfinder
            </Link>
        </div>
    )
}

export default Navbar;