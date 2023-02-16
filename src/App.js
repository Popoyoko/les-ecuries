import useMatchMedia from "./hooks/useMatchMedia";

import icon_carte from "./assets/icon_carte.png";
import icon_facebook from "./assets/icon_facebook.png";
import menu from "./assets/Menu-Les-Écuries-Site.pdf";

import Header from "./components/header";
import Button from "./components/button";
import Slider from "./components/slider";
import Map from "./components/map";
import Socials from "./components/socials";
import Footer from "./components/footer";

const DescriptionTop = () => (
  <p>
    Autrefois bureau de poste, lieu secret de fête du Paris mondain dans les
    années 70, restaurant médiéval dans les années 90, l’espace atypique des
    Ecuries n’a jamais cessé de renaitre et d’évoluer depuis la construction de
    ces murs. Réouvert en septembre 2014, ce lieu unique est aujourd’hui un
    espace de fête et d’exposition, un espace artistique et collaboratif basé
    sur l’échange et la créativité, ouvert aux talents et aux artistes.
  </p>
);

const DescriptionBottom = () => (
  <p>
    A travers sa décoration, sa carte, sa programmation, Les Ecuries veut
    promouvoir un état d’esprit basé sur le respect, la chaleur, la fête,
    l’échange, la solidarité, la créativité, la musique.
  </p>
);

const TimeTable = () => (
  <div>
    <p className="small">Ouvert du mardi au samedi de 18h à 1h30</p>
    <p className="smaller">(dimanche et lundi selon programmation)</p>
  </div>
);

const Buttons = () => {
  const isMobile = useMatchMedia("(max-width:700px)");
  return (
    <div className="buttons">
      <Button secondary href={menu} download={isMobile} target="blank">
        Notre carte
        <img src={icon_carte} className="vector_1" alt="logo_Notre carte" />
      </Button>
      <Button secondary href="https://www.facebook.com/lesecuriesbar/events">
        Programmation
        <img
          src={icon_facebook}
          className="vector_2"
          alt="logo_Programmation"
        />
      </Button>
    </div>
  );
};

const App = () => {
  const isMobile = useMatchMedia("(max-width:700px)");
  return (
    <div className="App">
      <Header />
      {isMobile ? (
        <>
          <DescriptionTop />
          <Slider />
          <DescriptionBottom />
          <Buttons />
          <Map />
          <TimeTable />
          <Socials />
          <Footer />
        </>
      ) : (
        <>
          <section>
            <Slider />
            <div className="sub">
              <DescriptionTop />
              <DescriptionBottom />
              <Buttons />
              <TimeTable />
            </div>
          </section>
          <Map />
          <div className="desktop-container-footer">
            <Footer />
            <Socials />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
