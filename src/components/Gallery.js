import '../css/styles.css';
import '../css/gallery-styles.css';
import GDecoratorR from '../assets/gallery-assets/gallery-decorator-r.png';
import GDecoratorL from '../assets/gallery-assets/gallery-decorator-l.png';
import GalleryPictures from './GalleryPictures'

function Gallery() {
  return (
    <div className="gallery__box" id='gallery__id'>
      <header className="gallery__box--header">

        <div className="title__headers" id="gallery__header--title">
          <img src={GDecoratorL} alt="Decorator left" />
          <h2 id="gallery__title--text">GALLERY</h2>
          <img src={GDecoratorR} alt="Decorator right" />
        </div>

        <p>You yourself are testing the taste benefits of each method <br />
          and select the type of cooking yourself</p>
      </header>

      <div id="gallery__pictures">
        <GalleryPictures />
      </div>
    </div>
  );
}

export default Gallery;
