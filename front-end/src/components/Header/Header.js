import './Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="flex__row">
                <img src={"./images/Logo.png"} alt="ロゴ" />
            </div>
            <div className="search">
                <div className="search__bar">
                    <img src={"./images/Search.png"} alt="検索アイコン" />
                    <span>Search...</span>
                </div>
            </div>
            <div className="image_1">
                <img src={"./images/Ellipse-176.png"} alt="国旗" />
            </div>
            <div className="image_2">
                <img src={"./images/Notification.png"} alt="通知アイコン" />
            </div>
            <div className="image_3">
                <img src={"./images/Group.png"} alt="メールアイコン" />
            </div>
            <div className="image_4">
                <img src={"./images/Group.png"} alt="ユーザーアイコン" />
            </div>
            <div className="name-area">
                <span className="name">Ryoji</span><br />
                <span className="authority">admin</span>
            </div>
        </header>
    );
}

export default Header;