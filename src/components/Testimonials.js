import '../css/styles.css';
import '../css/testimonials-styles.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Alex from '../assets/testimonials-assets/alex-image.png';
import PrevTest from '../assets/testimonials-assets/arrow-l.png';
import NextTest from '../assets/testimonials-assets/arrow-r.png';

function Testimonials() {
  const data = [
    {
      name: 'ALEX NIKANDROV',
      text: 'Our company is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended'
    },
    {
      name: 'ALEXANDER MILAN',
      text: 'Second copy is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended'
    },
    {
      name: 'SERGEY MILAN',
      text: 'Third copy is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended'
    },
    {
      name: 'SANDRA OROZCO',
      text: 'Fourth copy is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended'
    },
    {
      name: 'ANNA BOLENA',
      text: 'Fifth copy is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended'
    },
    {
      name: 'MARIANA CORTES',
      text: 'Sixt copy is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended'
    }

  ]
  return (
    <div className="testimonials" id='testimonials__id'>
      <header className="testimonials__header">
        <h2>TESTIMONIALS</h2>
        <p>We have enough patience to teach you the art of coffee</p>
      </header>

      <CarouselProvider
         naturalSlideWidth={100}
         naturalSlideHeight={100}
         totalSlides={6}
         visibleSlides={1}
         infinite='true'
      >
        <div className='testimonials__carousel'>
          <ButtonBack>
            <img src={PrevTest} alt="Previous testimonial" className="nav-icon" id="testimonials__button--pre"/>
          </ButtonBack>
          <Slider className='testimonials__gallery'>
            {data.map((individual => (
              <Slide>
                <div className="testimonials__box--content">
                  <img src={Alex} alt="Profile" id='testimonials__picture' />
                  <h5>{individual.name}</h5>
                  <p>{individual.text}</p>
                </div>
              </Slide>
            )))}
          </Slider>
          <ButtonNext>
            <img src={NextTest} alt="Next testimonial" className="nav-icon" id="testimonials__button--next"/>
          </ButtonNext>
        </div>
        <DotGroup className="testimonials__gallery--dots"/>
      </CarouselProvider>

      {/* <div className="testimonials__gallery">
        <img src={PrevTest} alt="Previous testimonial" className="nav-icon" id="testimonials__button--pre"/>

          <div className="testimonials__box--content">
            <img src={Alex} alt="Profile" id='testimonials__picture' />
            <h5>ALEX NIKANDROV</h5>
            <p>Our company is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, <br /> appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed <br /> and in a good mood! Recommended</p>
          </div>
        <img src={NextTest} alt="Next testimonial" className="nav-icon" id="testimonials__button--next"/>
      </div>
      <div className="testimonials__gallery--scroller">
        <img src={DarkBall} alt="Visual gallery guide" className="gallery--scroller" id="testimonials__scroller--1"/>
        <img src={DarkBall} alt="Visual gallery guide" className="gallery--scroller" id="testimonials__scroller--2"/>
        <img src={SelectedBall} alt="Visual gallery guide" className="gallery--scroller" id="testimonials__scroller--3"/>
        <img src={DarkBall} alt="Visual gallery guide" className="gallery--scroller" id="testimonials__scroller--4"/>
        <img src={DarkBall} alt="Visual gallery guide" className="gallery--scroller" id="testimonials__scroller--5"/>
        <img src={DarkBall} alt="Visual gallery guide" className="gallery--scroller" id="testimonials__scroller--6"/>
      </div> */}


    </div>
  );
}

export default Testimonials;
