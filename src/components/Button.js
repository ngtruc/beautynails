import React, { useState } from "react";
import './Button.css'
import {Link} from "react-router-dom"

function Button(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  return (
      <Link to='/sign-up' className='button-links'>
            <button className={`btn-${variant} btn-${size}`}>{props.children}</button>
      </Link>
    
  );
}
export default Button;