import './Navbar.css';

const Navbar = (props) => {
    return (
        <>
            <div className="navbar">
                <img src={"./images/icon-wrapper-h.png"} />
                <span>Home</span>
                <span> / </span>
                <span>Users</span>
            </div>
        </>
    );
}

export default Navbar;