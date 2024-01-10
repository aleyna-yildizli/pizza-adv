import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { text, style, to, id, onClick } = props;

  const handleOnClick = (event) => {
    onClick?.();
  }

  return (
   <Link to={to}>
    <button id={id} className='buttonMainDiv' style={style} onClick={handleOnClick}>
      {text}
     </button>
    </Link>
  );
};

export default Button;
