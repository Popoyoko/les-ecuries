import React from "react";
import { useState } from "react";
import "./index.css";
import Button from "../button";

function Dialog({ children}) {
  const [dialog, setDialog] = useState(false);

  const toggleDialog = () => {
    setDialog(!dialog);
  };

  return (
    <>
      <Button action={toggleDialog}>open</Button>
      {dialog && (
        <div className="dialog">
          <button
            className="overlay"
            onClick={toggleDialog}
            aria-describedby="close-overlay"
          ></button>

          <div className="dialog-inner">{children}</div>
        </div>
      )}
    </>
  );
}

export default Dialog;
