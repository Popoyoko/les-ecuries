import React from 'react'
import "./index.css"

function Dialog({children}) {

  return (
    <div className='dialog'>
        <div className='dialog-inner'>
            <button className='close-dialog'>close</button>
            {children}
        </div>
    </div>
  );
}

export default Dialog