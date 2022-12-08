import React from 'react'
import "./index.css"

function Dialog({children}) {

  return (
    <div className='dialog'>
        <div className='dialog-inner'>
            {children}
        </div>
    </div>
  );
}

export default Dialog