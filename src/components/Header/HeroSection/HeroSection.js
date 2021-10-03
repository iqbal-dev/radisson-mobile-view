import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../../assets/hero.png";
const HeroSection = () => {
  return (
    <div className="row justify-content-between align-items-center">
      <div className="col-6">
        <h5>COLLECTION</h5>
        <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
          <span style={{ color: "blue" }}>New</span> <br /> Arrivals
        </h1>
        <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam</p>
        <Link style={{ fontSize: "20px" }}>SHOP NOW</Link>
      </div>
      <div className="col-6">
        <img className="img-fluid" src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
