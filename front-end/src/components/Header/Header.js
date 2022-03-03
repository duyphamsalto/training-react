import './Header.css';

const Header = (props) => {
    return (
        <>
            <header>
                <div className="flex__row">
                    <img src={"./images/Logo.png"} />
                </div>
                <div className="search">
                    <div className="search__bar">
                        <img src={"./images/Search.png"} />
                        <input
                            className="search__bar__input"
                            placeholder="Search"
                            size="20"
                        />
                    </div>
                </div>
                <div className="image_1">
                    <img src={"./images/Ellipse 176.png"} />
                </div>
                <div className="image_2">
                    <img src={"./images/Notification.png"} />
                </div>
                <div className="image_3">
                    <img src={"./images/Group.png"} />
                </div>
                <div className="image_4">
                    <img src={"./images/Group.png"} />
                </div>
                <div className="name-area">
                    <span className="name">Taisei</span><br/>
                    <span className="authority">admin</span>
                </div>
            </header>
        </>
    );
}

export default Header;