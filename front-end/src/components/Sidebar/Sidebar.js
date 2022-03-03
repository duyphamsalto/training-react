import './Sidebar.css';

const Sidebar = (props) => {
    return (
        <div className="side-bar">
        <div className="">
          <img src={"./images/Dashbord.png"} width={20} />
          <span>Dashboard</span>
        </div>
        <div className="Main_content">
          <p>Main</p>
          <div className="">
            <a href="#">
              <img src={"./images/3User.png"} width={20} />
              <span>Users</span>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src={"./images/Game.png"} width={20} />
              <span>Posts</span>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src={"./images/Categories.png"} width={20} />
              <span>Categories</span>
            </a>
          </div>
        </div>
        <div className="settings_content">
          <p>Setting</p>
          <div className="">
            <a href="#">
              <img src={"./images/Document.png"} width={20} />
              <span>Profile</span>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src={"./images/Setting.png"} width={20} />
              <span>Roles</span>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src={"./images/Location.png"} width={20} />
              <span>Maps</span>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;