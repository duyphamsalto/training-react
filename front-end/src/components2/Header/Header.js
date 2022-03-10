import './Header.css';
import logo from '../img/Logo.png';
import language from '../img/Ellipse176.png';
import notice from '../img/Notification.png';
import mail from '../img/Mail.png';
//import account from './img/account.png';


function Header() {
  return(
      <>
          <header>
              <div class='site-logo'>
                  <img src={logo} alt='logo'></img>
              </div>
              <div class='search'>
                  <input type='text' placeholder='&#xf002; Search...'></input>
              </div>
              <div class='general-settings'>
                  <div class='disp-icons'>
                      <a><img src={language} alt='language'></img></a>
                      <a><img src={notice} alt='notice'></img></a>
                      <a><img src={mail} alt='mail'></img></a>
                  </div>
                  <ul class='account-info'>
                      <li class='user-name'>Duy Pham</li>
                      <li class='user-type'>Administrator</li>
                  </ul>
              </div>

          </header>
      </>
  );
}

export default Header;