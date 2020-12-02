import '../css/styles.css';
import '../css/header-styles.css';
import Logo from '../assets/header-assets/logo.png';
import Stars from '../assets/header-assets/stars.png';
import HeadDecLeft from '../assets/header-assets/decorator-l.png';
import HeadDecRight from '../assets/header-assets/decorator-r.png';
import Decorator from '../assets/header-assets/decorator2.png';
import DownArrow from '../assets/header-assets/down-arrow.png';
import Nav from './Nav';

function Header() {
  return (
    <div className="header" id='header__box'>
        <div className="header__box--first">
          <div className="header__box--pre"></div>
          <img src={Logo} alt="Logo" width="150px" id="header__logo"/>
          <div className="header__box--upper">
            <div className="header__box--nav"><Nav /></div>
            <p id='header__box--phone'> +38 (099)66-11-730 </p>
          </div>
        </div>
        <div className="header__box--second">
          <div className="header__titles--box">
            <img src={Stars} alt="Stars divider" width="180px" id="header__titles--stars"/>
            <div className="header__lead">
              <img src={HeadDecLeft} alt="decorator left" className="header__titles--decorator"/>
              <h6>Intensive program barista training</h6>
              <img src={HeadDecRight} alt="decorator right" className="header__titles--decorator"/>
            </div>
            <div className="header__title">
              <h1>Barista Training in <span id="header__titles--word">Amsterdam</span></h1>
              <p id='header__subheader'>On the basis of the company's largest coffee roasters</p>
              <img src={Decorator} alt="Header divider" id="header__titles--divider"/>
              <img src={DownArrow} alt="See more button" id="header__titles--arrow"/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Header;
