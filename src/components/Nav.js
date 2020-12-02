import '../css/styles.css';
import '../css/nav-styles.css';

function Nav() {
  return (
    <div className="nav">
      <ul>
        <li><a href="#programs__id" className="nav__options">PROGRAM</a></li>
        <li><a href="#gallery__id" className="nav__options">GALLERY</a></li>
        <li><a href="#testimonials__id" className="nav__options">REVIEWS</a></li>
        <li><a href="#partners__id" className="nav__options">PARTNERS</a></li>
        <li><a href="#contact__id" className="nav__options">CONTACT</a></li>
      </ul>
    </div>
  );
}

export default Nav;
