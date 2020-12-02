import '../css/styles.css';
import '../css/contact-styles.css';
import Nav from './Nav';
import Phone from '../assets/footer-assets/footer-phone.png';
import Location from '../assets/footer-assets/footer-location.png';
import Envelope from '../assets/footer-assets/footer-envelope.png';
import Separator from '../assets/footer-assets/footer-separator.png';

function Contact() {
  return (
    <div className="contact" id='contact__id'>
        <h2 id='contact__title'>PROFESSIONAL SCHOOL BARISTA</h2>
      <div className="contact__columns--box">
          <p className="contact__columns--text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores dignissimos, amet quidem qui fuga id laboriosam unde dolorum consequatur ad! Vitae excepturi eius molestiae blanditiis voluptatum aspernatur rem temporibus expedita?
              Repellendus aperiam commodi magni esse cum modi consectetur, ex nulla! Est nesciunt delectus labore aliquam dignissimos. Eligendi debitis odit vitae modi molestiae repellat perferendis assumenda veritatis sunt placeat. Fugiat, labore.
              Iure odio velit iste placeat, incidunt quae in explicabo. Aliquid sunt labore corrupti optio, obcaecati delectus quisquam nostrum deserunt odio odit, non nulla fuga ea totam reiciendis! Sunt, mollitia aliquam.
              Voluptas placeat nostrum dignissimos aspernatur temporibus pariatur, atque incidunt labore qui? Eveniet molestiae qui nisi ullam, cupiditate quae fugit unde sequi soluta repellendus saepe, repudiandae facere? Omnis atque expedita tempore!
              Aut velit corporis repellendus nostrum voluptatum ea deleniti aliquam?
              </p>
              <p className="contact__columns--text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores dignissimos, amet quidem qui fuga id laboriosam unde dolorum consequatur ad! Vitae excepturi eius molestiae blanditiis voluptatum aspernatur rem temporibus expedita?
              Repellendus aperiam commodi magni esse cum modi consectetur, ex nulla! Est nesciunt delectus labore aliquam dignissimos. Eligendi debitis odit vitae modi molestiae repellat perferendis assumenda veritatis sunt placeat. Fugiat, labore.
              Iure odio velit iste placeat, incidunt quae in explicabo. Aliquid sunt labore corrupti optio, obcaecati delectus quisquam nostrum deserunt odio odit, non nulla fuga ea totam reiciendis! Sunt, mollitia aliquam.
              Voluptas placeat nostrum dignissimos aspernatur temporibus pariatur, atque incidunt labore qui? Eveniet molestiae qui nisi ullam, cupiditate quae fugit unde sequi soluta repellendus saepe, repudiandae facere? Omnis atque expedita tempore!
              Aut velit corporis repellendus nostrum voluptatum ea deleniti aliquam?
          </p>
      </div>

      <div className="contact__table--box">
        <div id="contact__nav">
          <Nav />
        </div>
        <div className="contact__table--row">
          <div className="contact__table__column"><img src={Phone} alt="Phone number" id="contact__phone"/></div>
          <div className="contact__table__column"><img src={Location} alt="Physical location" id="contact__location"/></div>
          <div className="contact__table__column"><img src={Envelope} alt="Email address" id="contact__email"/></div>
        </div>
        <div className="contact__table--row">
          <div className="contact__table__column">+38 000 000 000</div>
          <div className="contact__table__column">Ukraine, 61002</div>
          <div className="contact__table__column">hello@.com</div>
        </div>
      </div>
      <footer className="footer" id='footer__box'>
        <p>© Copyright 2017, All Rights Reserved.</p>
        <img src={Separator} alt="Divider decorator" className="footer__divider"/>
        <h5>SITE TEMPLATE BY NICKANDROV.PRO</h5>
      </footer>
    </div>
  );
}

export default Contact;
