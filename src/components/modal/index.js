import React from "react";
import Modal from 'react-modal';

import "./index.css";
let container = document.getElementById("root")
Modal.setAppElement(container)




const AppModal = ({ children, isOpen, onRequestClose }) => {

  return (
    <Modal
      id="test"
      contentLabel="modalA"
      closeTimeoutMS={150}
      isOpen={isOpen}
      onAfterOpen={() => console.log("We should trace how many people see this modal")}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      overlayClassName="overlay"
      className="modal">
      <div className="content" >
        {children}
      </div>
    </Modal>
  );
}

export default AppModal;
