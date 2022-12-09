import React from "react";
import { useState } from "react";
import "./index.css";

function Dialog({ children }) {
  const [dialog, setDialog] = useState(false);

  const toggleDialog = () => {
    setDialog(!dialog);
  };

  return (
    <>
      <button onClick={toggleDialog}>Open</button>

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
