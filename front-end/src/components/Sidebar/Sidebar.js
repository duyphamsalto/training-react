import './Sidebar.css';
import { Link } from "react-router-dom";


const Sidebar = (props) => {
  return (
    <div className="side-bar">
      <div className="dashboard">
        <img className="dash-logo" src={"./images/Dashbord.png"} width={20} alt="ダッシュボードアイコン" />
        <span>　Dashboard</span>
      </div>
      <div className="side-index">
        <hr />
        <p>Main</p>
        <div className="main-users">
        <Link to="/Users">
          <img src={"./images/3User.png"} width={20} alt="ユーザーズアイコン" />
          <span>　Users</span>
          </Link>
        </div>
        <div className="side-elements">
        <Link to="/">
          <img src={"./images/Game.png"} width={20} alt="投稿アイコン" />
          <span>　Posts</span>
          </Link>
        </div>
        <div className="side-elements">
          <img src={"./images/Categories.png"} width={20} alt="カテゴリーアイコン" />
          <span>　Categories</span>
        </div>
        <hr />
      </div>
      <div className="side-index">
        <p>Setting</p>
        <div className="side-elements">
          <img src={"./images/Document.png"} width={20} alt="プロフィールアイコン" />
          <span>Profile</span>
        </div>
        <div className="side-elements">
          <img src={"./images/Setting.png"} width={20} alt="ロールアイコン" />
          <span>Roles</span>
        </div>
        <div className="side-elements">
          <img src={"./images/Location.png"} width={20} alt="地図アイコン" />
          <span>Maps</span>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Sidebar;