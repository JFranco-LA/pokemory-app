import React from "react";
import Button from "../components/Button";
import background2 from "../assets/images/BACKGROUND2.png";
import "./home.css";
const HomePage = () => {
  return (
    <div className="container">
      <img src={background2} alt="" className="fondoHome" />
      <div className="prueba">
        <Button direction={"home"} name={"Facíl"} complemention={"2 cards"} />

        <Button direction={"home"} name={"Medio"} complemention={"6 cards"} />

        <Button
          direction={"home"}
          name={"Difícil"}
          complemention={"100 cards"}
        />
      </div>
    </div>
  );
};

export default HomePage;
