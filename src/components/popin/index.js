import React from 'react'
import "./index.css"

function Popin(props) {

  return (props.trigger) ? (
    <div className='popin'>
        <div className='popin-inner'>
            <h2>test n2</h2>
            <button className='close-popin'>close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Popin