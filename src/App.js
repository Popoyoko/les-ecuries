import useMatchMedia from "./hooks/useMatchMedia";

import icon_telephone from "./assets/icon_telephone.png";
import icon_carte from "./assets/icon_carte.png";
import icon_facebook from "./assets/icon_facebook.png";

import Header from "./components/header";
import Button from "./components/button";
import Slider from "./components/slider";
import Map from "./components/map";
import Socials from "./components/socials";
import Footer from "./components/footer";
import AppModal from "./components/modal";
import { useState } from "react";


function App() {
  const isWideViewport = useMatchMedia("(max-width:700px)");
  const [isAppModal, setAppModal] = useState(false);

  return (
    <>
        <AppModal isOpen={isAppModal} onRequestClose={() => setAppModal(!isAppModal)}>
          <div className="description">
            <p>
              Nous ne pouvons prendre aucune réservation par téléphone.
            </p>
          </div>
          <Button href="https://pro.guestonline.fr/instabook/bookings/1kATjqd">
            Réservation en ligne
          </Button>
          <Button secondary >
            07 64 54 09 74
            <img
              src={icon_telephone}
              className="vector"
              alt="logo_contactez-nous"
            />
          </Button>
          <div className="description">
            <p>
              Nous répondons également à toutes vos questions par mail:
            </p>
            <p id="lien-site">lesecuriesbar@gmail.com</p>
          </div>
        </AppModal>
      {isWideViewport ? (
        <div className="App">
          <Header />
          <div className="buttons">
            <Button href="https://pro.guestonline.fr/instabook/bookings/1kATjqd">
              Réservation en ligne
            </Button>
            <Button secondary action={() => setAppModal(!isAppModal)}>
              Contactez-nous
              <img
                src={icon_telephone}
                className="vector"
                alt="logo_contactez-nous"
              />
            </Button>
          </div>
          <div className="description">
            <p>
              Autrefois bureau de poste, lieu secret de fête du Paris mondain
              dans les années 70, restaurant médiéval dans les années 90,
              l’espace atypique des Ecuries n’a jamais cessé de renaitre et
              d’évoluer depuis la construction de ces murs. Réouvert en
              septembre 2014, ce lieu unique est aujourd’hui un espace de fête
              et d’exposition, un espace artistique et collaboratif basé sur
              l’échange et la créativité, ouvert aux talents et aux artistes.
            </p>
          </div>
          <Slider />
          <div className="description">
            <p>
              A travers sa décoration, sa carte, sa programmation, Les Ecuries
              veut promouvoir un état d’esprit basé sur le respect, la chaleur,
              la fête, l’échange, la solidarité, la créativité, la musique.
            </p>
          </div>
          <div className="buttons">
            <Button
              secondary
              href="./assets/Menu-Les-Ecuries.pdf"
            >
              Notre carte
              <img
                src={icon_carte}
                className="vector_1"
                alt="logo_Notre carte"
              />
            </Button>
            <Button
              secondary
              href="https://www.facebook.com/lesecuriesbar/events"
            >
              Programmation
              <img
                src={icon_facebook}
                className="vector_2"
                alt="logo_Programmation"
              />
            </Button>
          </div>
          <Map />
          <div className="timetable">
            <p>
              Ouvert du mardi au samedi de 18h à 1h30 (dimanche et lundi selon
              programmation)
            </p>
          </div>

          <Socials />
          <Footer />
        </div>
      ) : (
        <div>
          <div className="App">
            <div className="desktop-container-top">
              <Header />
              <div className="buttons">
                <Button href="https://pro.guestonline.fr/instabook/bookings/1kATjqd">
                  Réservation en ligne
                </Button>
                <Button secondary action={() => setAppModal(!isAppModal)}>
                  Contactez-nous
                  <img
                    src={icon_telephone}
                    className="vector"
                    alt="logo_contactez-nous"
                  />
                </Button>
              </div>
            </div>
            <div className="desktop-container-mid">
              <div className="desktop-container-slider">
                <Slider />
              </div>
              <div className="desktop-container-information">
                <div className="description">
                  <p>
                    Autrefois bureau de poste, lieu secret de fête du Paris
                    mondain dans les années 70, restaurant médiéval dans les
                    années 90, l’espace atypique des Ecuries n’a jamais cessé de
                    renaitre et d’évoluer depuis la construction de ces murs.
                    Réouvert en septembre 2014, ce lieu unique est aujourd’hui
                    un espace de fête et d’exposition, un espace artistique et
                    collaboratif basé sur l’échange et la créativité, ouvert aux
                    talents et aux artistes.
                  </p>
                </div>
                <div className="description">
                  <p>
                    A travers sa décoration, sa carte, sa programmation, Les
                    Ecuries veut promouvoir un état d’esprit basé sur le
                    respect, la chaleur, la fête, l’échange, la solidarité, la
                    créativité, la musique.
                  </p>
                </div>
                <div className="buttons">
                  <Button
                    secondary
                    href="http://lesecuries-bar.com/wp-content/uploads/2015/06/Menu-Les-E%CC%81curies-Site.pdf"
                  >
                    Notre carte
                    <img
                      src={icon_carte}
                      className="vector_1"
                      alt="logo_Notre carte"
                    />
                  </Button>
                  <Button
                    secondary
                    href="https://www.facebook.com/lesecuriesbar/events"
                  >
                    Programmation
                    <img
                      src={icon_facebook}
                      className="vector_2"
                      alt="logo_Programmation"
                    />
                  </Button>
                </div>
                <div className="timetable">
                  <p>
                    Ouvert du mardi au samedi de 18h à 1h30 (dimanche et lundi
                    selon programmation)
                  </p>
                </div>
              </div>
            </div>
            <Map />
            <div className="desktop-container-footer">
              <Socials />
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
