import './css/styles.css';
import Header from './components/Header';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Questions from './components/Questions';
import Contact from './components/Contact';

function App() {
  return (
    <div>
    <Header />
    <Programs />
    <Gallery />
    <Testimonials />
    <Partners />
    <Questions />
    <Contact />
    </div>
  );
}

export default App;
