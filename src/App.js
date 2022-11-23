import useMatchMedia from "./hooks/useMatchMedia";

import vector from "./assets/Vector.png";
import vector_1 from "./assets/Vector_1.png";
import vector_2 from "./assets/Vector_2.png";
import vector_3 from "./assets/Vector_3.png";

import Header from "./components/header";
import Button from "./components/button";
import Slider from "./components/slider";
import Map from "./components/map";
import Footer from "./components/footer";

function App() {
  const isWideViewport = useMatchMedia("(max-width:700px)");
  return (
    <div>
      {isWideViewport ? (
        <div className="App">
          <Header />
          <div className="buttons">
            <Button href="https://pro.guestonline.fr/instabook/bookings/1kATjqd">
              Réservation en ligne
            </Button>
            <Button secondary>
              Contactez-nous
              <img src={vector} className="vector" alt="logo_contactez-nous" />
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
              href="http://lesecuries-bar.com/wp-content/uploads/2015/06/Menu-Les-E%CC%81curies-Site.pdf"
            >
              Notre carte
              <img src={vector_1} className="vector_1" alt="logo_Notre carte" />
            </Button>
            <Button
              secondary
              href="https://www.facebook.com/lesecuriesbar/events"
            >
              Programmation
              <img
                src={vector_2}
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

          <div className="socials">
            <div className="follow">
              <h2>Suivez-nous</h2>
            </div>
            <div className="socials-button">
              <Button
                secondary
                icon
                href="https://www.facebook.com/lesecuriesbar/"
              >
                <img
                  src={vector_2}
                  className="vector"
                  alt="logo_contactez-nous"
                />
              </Button>
              <Button
                secondary
                icon
                href="https://www.instagram.com/bar_les_ecuries_paris/"
              >
                <img
                  src={vector_3}
                  className="vector"
                  alt="logo_contactez-nous"
                />
              </Button>
            </div>
          </div>
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
                <Button secondary>
                  Contactez-nous
                  <img
                    src={vector}
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
                      src={vector_1}
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
                      src={vector_2}
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
            <div className="desktop-container-bot">
              <div className="desktop-container-map">
                <Map />
              </div>
              <div className="desktop-container-footer">
                <Footer />
                <div className="socials">
                  <div className="follow">
                    <h2>Suivez-nous</h2>
                  </div>
                  <div className="socials-button">
                    <Button
                      secondary
                      icon
                      href="https://www.facebook.com/lesecuriesbar/"
                    >
                      <img
                        src={vector_2}
                        className="vector"
                        alt="logo_contactez-nous"
                      />
                    </Button>
                    <Button
                      secondary
                      icon
                      href="https://www.instagram.com/bar_les_ecuries_paris/"
                    >
                      <img
                        src={vector_3}
                        className="vector"
                        alt="logo_contactez-nous"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
