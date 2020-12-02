import '../css/styles.css';
import '../css/partners-styles.css';
import LeftDecorator from '../assets/partners-assets/partners-decorator-l.png';
import RightDecorator from '../assets/partners-assets/partners-decorator-r.png';
import Logos from '../assets/partners-assets/partners-logos.png';
import Underscore from '../assets/partners-assets/partners-underscore.png';
import LeftArrow from '../assets/partners-assets/arrow-l.png';
import RightArrow from '../assets/partners-assets/arrow-r.png';

function Partners() {
  return (
    <div className="partners" id='partners__id'>

      <header className="partners__header">
        <img src={LeftDecorator} alt="Decorator left" />
        <h2 id="partners__text">OUR PARTNERS</h2>
        <img src={RightDecorator} alt="Decorator right" />
      </header>

      <img src={Underscore} alt="Decorator right" id="partners__underscore"/>

      <div className="partners__logos">
        <img src={LeftArrow} alt="Previous logos" href="" className="nav-icon"/>
        <img src={Logos} alt="Partners logos" className="partners__logos--gallery"/>
        <img src={RightArrow} alt="See more logos" href="" className="nav-icon" />
      </div>

    </div>
  );
}

export default Partners;
