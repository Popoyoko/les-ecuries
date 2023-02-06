import { useState } from "react";
import "./index.css";
import logo from "../../assets/logo_les_ecuries.png";
import icon_telephone from "../../assets/icon_telephone.png";
import AppModal from "../modal";
import Button from "../button";

const Header = () => {
  const [isAppModal, setAppModal] = useState(false);
  const Modal = () => {
    return (
      <AppModal isOpen={isAppModal} onRequestClose={() => setAppModal(false)}>
        <p itemProp="reservation">Nous ne pouvons prendre aucune réservation par téléphone.</p>
        <Button href="https://pro.guestonline.fr/instabook/bookings/1kATjqd">
          Réservation en ligne
        </Button>
        <p itemProp="information">
          Pour tout autre information <b>(hors réservations)</b>:
        </p>
        <Button secondary href={"tel:0664540974"}>
          07 64 54 09 74
          <img src={icon_telephone} alt="logo_contactez-nous" itemProp="phone"/>
        </Button>
        <Button secondary href="mailto:lesecuriesbar@gmail.com">
          lesecuriesbar@gmail.com
        </Button>
        <Button secondary action={() => setAppModal(false)}>
          Fermer
        </Button>
      </AppModal>
    );
  };
  return (
    <>
      <Modal />
      <header>
        <div className="top">
          <img src={logo} className="logo" alt="logo" />
          <div className="infos">
            <h1>Les Écuries</h1>
            <address>8 Rue Bachaumont, 75002 Paris</address>
          </div>
        </div>
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
      </header>
    </>
  );
};

export default Header;
