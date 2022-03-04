import './Sidebar.css';

const Sidebar = (props) => {
    return (
        <div className="side-bar">
        <div className="dashboard">
          <img className="dash-logo" src={"./images/Dashbord.png"} width={20} />
          <span>　Dashboard</span>
        </div>
        <div className="side-index">
          <hr/>
          <p>Main</p>
          <div className="main-users">
              <img src={"./images/3User.png"} width={20} />
              <span>　Users</span>
          </div>
          <div className="side-elements">
              <img src={"./images/Game.png"} width={20} />
              <span>　Posts</span>
          </div>
          <div className="side-elements">
              <img src={"./images/Categories.png"} width={20} />
              <span>　Categories</span>
          </div>
          <hr/>
        </div>
        <div className="side-index">
          <p>Setting</p>
          <div className="side-elements">
              <img src={"./images/Document.png"} width={20} />
              <span>Profile</span>
          </div>
          <div className="side-elements">
              <img src={"./images/Setting.png"} width={20} />
              <span>Roles</span>
          </div>
          <div className="side-elements">
              <img src={"./images/Location.png"} width={20} />
              <span>Maps</span>
          </div>
          <hr/>
        </div>
      </div>
    );
}

export default Sidebar;