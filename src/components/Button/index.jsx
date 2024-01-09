import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { text, style, to } = props;

  return (
   <Link to={to}>
    <button className='buttonMainDiv'  style={style}>
      {text}
     </button>
    </Link>
  );
};

export default Button;
