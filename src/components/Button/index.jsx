import React from 'react';
import "./style.css";

const Button = (props) => {
  const { text, onClick } = props;

  return (
    <button className='buttonMainDiv' onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
