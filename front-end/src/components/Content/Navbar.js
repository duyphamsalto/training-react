import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <img src={"./images/icon-wrapper-h.png"} alt="ホームアイコン" />
            <Link to="/">Home</Link>
            <span> / </span>
            <Link to="/Users">Users</Link>
        </div>
    );
}

export default Navbar;