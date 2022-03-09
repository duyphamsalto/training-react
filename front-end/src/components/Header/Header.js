import './Header.css';
import logo from './img/logo.png';
import language from './img/language.png';
import notice from './img/notice.png';
import mail from './img/mail.png';
import account from './img/account.png';


function Header() {
    return(
        <>
            <header>
                <div className='site-logo'>
                    <img src={logo} alt='logo'></img>
                </div>
                <div className='search'>
                    <input type='text' placeholder='&#xf002; Search...'></input>
                </div>
                <div className='general-settings'>
                    <div className='disp-icons'>
                        <a><img src={language} alt='language'></img></a>
                        <a><img src={notice} alt='notice'></img></a>
                        <a><img src={mail} alt='mail'></img></a>
                        <a><img src={account} alt='account'></img></a>
                    </div>
                    <ul className='account-info'>
                        <li className='user-name'>Taiga Matsumoto</li>
                        <li className='user-type'>Administrator</li>
                    </ul>
                </div>

            </header>
        </>
    );
}

export default Header;