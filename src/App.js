import useMatchMedia from "./hooks/useMatchMedia"
import icon_telephone from './assets/icon-telephone.png';
import icon_carte from './assets/icon-carte.png';
import icon_facebook from './assets/icon-facebook.png';

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
    <div>
      {isWideViewport ? (
        <div className="App">
          <Header></Header>
          <div className="boutton">
            <Button href='https://pro.guestonline.fr/instabook/bookings/1kATjqd'>Réservation en ligne</Button>
            <Button secondary>Contactez-nous</Button>

            <button className='btn_fond_n' label="Contactez-nous">
              Contactez-nous
              <img src={icon_telephone} className="vector" alt="logo_contactez-nous" />
            </button>
          </div>
          <Description></Description>
          <Slider></Slider>
          <div className="description">
            <p>
              Autrefois bureau de poste, lieu secret de fête du Paris mondain dans les années 70, restaurant médiéval dans les années 90,
              l’espace atypique des Ecuries n’a jamais cessé de renaitre et d’évoluer depuis la construction de ces murs. Réouvert en septembre 2014,
              ce lieu unique est aujourd’hui un espace de fête et d’exposition, un espace artistique et collaboratif basé sur l’échange et la créativité,
              ouvert aux talents et aux artistes.
            </p>
          </div>
          <div className="boutton_information">
            <a href='http://lesecuries-bar.com/wp-content/uploads/2015/06/Menu-Les-E%CC%81curies-Site.pdf'>
              <button className='btn_fond_n' label="Notre carte">
                <p>Notre carte</p>
                <img src={icon_carte} className="vector_1" alt="logo_Notre carte" />
              </button>
            </a>


            <a href='https://www.facebook.com/lesecuriesbar/events'>
              <button className='btn_fond_n' label="Programmation">
                <p>Programmation</p>
                <img src={icon_facebook} className="vector_2" alt="logo_Programmation" />
              </button>
            </a>
          </div>          <Map></Map>
          <Horraires></Horraires>
          <Socials></Socials>
          <Footer></Footer>
        </div>
      ) : (
        <div className="app-desktop">
          <div className="container-top-desktop">
            <Header></Header>
            <div className="boutton">
              <Button secondary>Réservation en ligne</Button>
              <Button href={"google.com"}>Réservation en ligne</Button>

              <a href='https://pro.guestonline.fr/instabook/bookings/1kATjqd'>
                <button className='btn_fond_b' label="Réservation en ligne">
                  <p>Réservation en ligne</p>
                </button>
              </a>
              <button className='btn_fond_n' label="Contactez-nous">
                <p>Contactez-nous</p>
                <img src={icon_telephone} className="vector" alt="logo_contactez-nous" />
              </button>
            </div>
          </div>
          <div className="container-mid-desktop">
            <div className="container-map-desktop">
              <Map></Map>
            </div>
            <div className="container-description-desktop">
              <Description></Description>
              <div className="description">
                <p>
                  Autrefois bureau de poste, lieu secret de fête du Paris mondain dans les années 70, restaurant médiéval dans les années 90,
                  l’espace atypique des Ecuries n’a jamais cessé de renaitre et d’évoluer depuis la construction de ces murs. Réouvert en septembre 2014,
                  ce lieu unique est aujourd’hui un espace de fête et d’exposition, un espace artistique et collaboratif basé sur l’échange et la créativité,
                  ouvert aux talents et aux artistes.
                </p>
              </div>
              <div className="boutton_information">
                <a href='http://lesecuries-bar.com/wp-content/uploads/2015/06/Menu-Les-E%CC%81curies-Site.pdf'>
                  <button className='btn_fond_n' label="Notre carte">
                    <p>Notre carte</p>
                    <img src={icon_carte} className="vector_1" alt="logo_Notre carte" />
                  </button>
                </a>


                <a href='https://www.facebook.com/lesecuriesbar/events'>
                  <button className='btn_fond_n' label="Programmation">
                    <p>Programmation</p>
                    <img src={icon_facebook} className="vector_2" alt="logo_Programmation" />
                  </button>
                </a>
              </div>
              <Horraires></Horraires>
            </div>
          </div>
          <div className="container-bot-desktop">
            <div className="container-photogrid-desktop">
              <PhotoGrid></PhotoGrid>
            </div>
            <div className="container-footer-desktop">
              <Footer></Footer>
              <Socials></Socials>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
