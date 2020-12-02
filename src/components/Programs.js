import '../css/styles.css';
import '../css/programs-styles.css';
import Star from '../assets/program-assets/black-star.png';
import BasicImage from '../assets/program-assets/basic-image.jpg';
import Certificate from '../assets/program-assets/certificate-icon.png';
import Clock from '../assets/program-assets/clock-icon.png';
import Table from './Table.js';


function Programs() {
  return (
    <div className="programs" id='programs__id'>
      <header className="programs__header">

        <div className="programs__header--title">
          <img src={Star} alt="decorator star left"/>
          <h2 id="programs__header--titleid">Programs</h2>
          <img src={Star} alt="decorator star right"/>
        </div>

        <p>We share their experience and professional barista championship multiple winners</p>

        <div className="programs__header--options">
            <h4 href="" className="programs__header--titles">Basic</h4>
            <h4 href="" className="programs__header--titles">Premium</h4>
            <h4 href="" className="programs__header--titles">Platinum</h4>
        </div>
      </header>

      <div className="programs__basic">
          <span id="programs__basic--watermark">BASIC</span>

          <div className="programs__basic--content">
            <img src={BasicImage} alt="Reference for basic plan" id="programs__basic--img"/>

            <div className="programs__basic--text">
            <h3>Beginners Course</h3>
            <div className="programs__basic--icon"><img src={Certificate} alt="Certification" className="programs__icons"/><p>Certificate</p></div>
            <div className="programs__basic--icon"><img src={Clock} alt="Clock" className="programs__icons"/><p>240 minutes</p></div>
            <h3 id="program__basic--h3"><span id="program__basic--prize">1500</span>usd</h3>
            <button id="programs__basic--registration">REGISTRATION</button>
            </div>

          </div>

      </div>
      <div className="programs__info--box">
        <div className="programs__info">
            <h5 className="programs__info--titles">PROVENANCE<br />COFFEE AND BASIC CONCEPTS: </h5>
            <p> Legend of the origin of coffee.<br />
              - Chronicle of the spread of the coffee tree<br />
              - What is coffee?<br />
              - The structure of the coffee berry<br />
              - Arabica and Robusta<br />
              - Coffee Belt land <br />
              - Fruiting coffee tree<br />
              - Seven steps of the coffee plantation to the consumer<br />
              - Breeding and hybridization of coffee tree</p>
        </div>
        <div className="programs__info">
            <h5 className="programs__info--titles"><br />COFFEE PRODUCTION TECHNOLOGY: </h5>
            <p>- Methods for collecting coffee berries<br />
              - Processing collected berries<br />
              - Calibration and sorting<br />
              - Some methods of classification and labeling of coffee beans.<br />
              - Formation of grade names.<br />
              - Storage of green (not fried) Coffee
            </p>
        </div>
        <div className="programs__info">
            <h5 className="programs__info--titles">ROASTING TECHNOLOGY BEAN AND STAGE <br />TYPES OF ROASTING:</h5>
            <p>- The technology of roasting coffee beans.<br />
              - Changes in the beans.<br />
              - Stages and types of roasting.<br />
              - Roasted coffee. Monosorta and hood.<br />
              - Decaffeination of coffee <br />
              - Flavoring<br />
              - Storage roasted coffee
            </p>
        </div>
      </div>
      <Table />
    </div>
  );
}

export default Programs;
