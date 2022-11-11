import useMatchMedia from "./hooks/useMatchMedia"
import vector from './assets/Vector.png';
import vector_1 from './assets/Vector_1.png';
import vector_2 from './assets/Vector_2.png';

import Header from "./components/header";
import Button from "./components/button";
import Description from "./components/description";
import Slider from "./components/slider";
import Map from "./components/map";
import Horraires from "./components/horraires";
import Socials from "./components/socials";
import Footer from "./components/footer";
import PhotoGrid from "./components/photoGrid";

function App() {
  const isWideViewport = useMatchMedia("(max-width:700px)");
  return (
    <div className="App">
      <Header />
      <div className="buttons">
        <Button href='https://pro.guestonline.fr/instabook/bookings/1kATjqd'>Réservation en ligne</Button>
        <Button secondary>Contactez-nous
          <img src={vector} className="vector" alt="logo_contactez-nous" />
        </Button>
      </div>
      <Description />
      <Slider />
      <div className="description">
        <p>
          Autrefois bureau de poste, lieu secret de fête du Paris mondain dans les années 70, restaurant médiéval dans les années 90,
          l’espace atypique des Ecuries n’a jamais cessé de renaitre et d’évoluer depuis la construction de ces murs. Réouvert en septembre 2014,
          ce lieu unique est aujourd’hui un espace de fête et d’exposition, un espace artistique et collaboratif basé sur l’échange et la créativité,
          ouvert aux talents et aux artistes.
        </p>
      </div>
      <div className="buttons">
        <Button secondary href='http://lesecuries-bar.com/wp-content/uploads/2015/06/Menu-Les-E%CC%81curies-Site.pdf'>
          Notre carte
          <img src={vector_1} className="vector_1" alt="logo_Notre carte" />
        </Button>
        <Button secondary href='https://www.facebook.com/lesecuriesbar/events'>
          Programmation
          <img src={vector_2} className="vector_2" alt="logo_Programmation" />
        </Button>
      </div>
      <Map />
      <Horraires />
      <Button secondary icon><img src={vector_1} className="vector_1" alt="logo_Notre carte" /></Button>
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
