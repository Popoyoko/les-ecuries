import "./index.css";
import React, { useState } from "react";

function Modal() {

    const [modal, setModal] = useState(false); // Pour mettre le modal de base à false, pour pas qu'il s'ouvre dés le début

    const toggleModal = () => {
        setModal(!modal)
    }
    // Sert à inverser la valeur du modal, pour le voir ou le fermer

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                MODAL
            </button>
            {/* Ouvrir le modal */}

            {modal && (
                <div className="modal">
                <div onClick={toggleModal} className="background"></div>
                <div className="modal-content">
                    <h1>TEST MODAL</h1>
                    <p>ca fonctionne</p>
                    <button onClick={toggleModal} className="close-modal">Fermer le modal</button>
                </div>

            </div>
            )}
            {/* Si le modal est vraie, alors il affiche le contenu */}
        </>
    )
}

export default Modal;