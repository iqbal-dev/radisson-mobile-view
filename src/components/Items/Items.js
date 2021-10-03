import React from "react";
import { Bookmark } from "react-feather";
import { Link } from "react-router-dom";
import { product } from "../../assets/product";
const Items = () => {
  console.log(product);
  return (
    <div className="mb-5">
      <h4 className="py-3">BEST SELLING</h4>
      <div className="row justify-content-around">
        {product?.map((data, index) => (
          <div
            className="col-5"
            style={{ boxShadow: "#b6c4cb 0 0 8px 0px", position: "relative" }}
          >
            <Link to={`details/${index + 1}`}>
              <img className="img-fluid" src={data.featureImage} alt="" />
              <h6 className="text-center mt-3">{data.name}</h6>
              <p
                className="text-center"
                style={{ fontSize: "14px", color: "gray" }}
              >
                {data.details}
              </p>
              <h6>${data.price}</h6>
              <button
                style={{
                  position: "absolute",
                  right: "-12px",
                  bottom: "-10px",
                  backgroundColor: "#005DFF",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                }}
              >
                <Bookmark />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
