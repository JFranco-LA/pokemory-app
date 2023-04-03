import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({direction, name, complemention}) => {
  return (
    <Link to={`/${direction}`} className="redirect-home">
      <button className="button-to">{name}</button>
      <button className="atribute-button">{complemention}</button>
    </Link>
  );
};

export default Button;
