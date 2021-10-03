import React from "react";
import { product } from "../../assets/product";
import Description from "./Description/Description";
import DetailsImage from "./DetailsImage/DetailsImage";
const Details = () => {
  return (
    <div className="container">
      <DetailsImage product={product} />
      <Description product={product} />
    </div>
  );
};

export default Details;
