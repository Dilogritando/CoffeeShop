import '../css/styles.css';
import '../css/questions-styles.css';
import QUnderscore from '../assets/questions-assets/questions-underscore.png';
import SendArrow from '../assets/questions-assets/questions-arrow.png';

function Questions() {
  return (
    <div className="questions" id='questions__id'>
      <div className="questions__header">
        <h2>HAVE QUESTIONS?</h2>
        <img src={QUnderscore} alt="Section divider" id='questions__underscore'/>
        <p>Leave a request and we will contact you shortly</p>

        <form className="questions__form--box">
          <input type="text" placeholder="YOUR NAME" className="questions__form"/>
          <div className="questions__form--secondary">
            <input type="text" placeholder="CONTACT NUMBER" className="questions__form" id="questions__form--number"/>
            <button type="submit" id="questions__form--button">SEND</button>
            <img src={SendArrow} alt="arrow right" id="questions__form--arrow"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Questions;
