import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { text, to, id, onClick, className } = props;

  const handleOnClick = (event) => {
    onClick && onClick(); //Böyle bir prob gelirse çalıştır
  };

  return (
    <Link to={to}>
      <button id={id} onClick={handleOnClick} className={className}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
