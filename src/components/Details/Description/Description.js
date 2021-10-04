import React, { useState } from "react";
import { ShoppingCart } from "react-feather";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { addToCart } from "../../../redux/cart/cartAction";
const Description = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [color, setColor] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const detailsProduct = product.filter(
    (data, index) => index + 1 === Number(id)
  );
  const handleClick = (data) => {
    dispatch(addToCart(data, quantity));
    history.push("/cart");
  };
  return (
    <div>
      <h3>{detailsProduct[0]?.name}</h3>
      <h5 style={{ color: "blue" }}>${detailsProduct[0]?.price} </h5>
      <h6 className="mt-5">color</h6>
      <div className="text-center row justify-content-between align-items-center">
        <div className="row justify-content-around" style={{ width: "50%" }}>
          <div
            style={{
              padding: "3px",
              border: color === 1 ? "2px solid gray" : "none",
              height: "30px",
              width: "30px",
              borderRadius: "100%",
            }}
          >
            <p
              style={{
                backgroundColor: "blue",
                height: "20px",
                width: "20px",
                borderRadius: "100%",
              }}
              onClick={() => setColor(1)}
            ></p>
          </div>
          <div
            style={{
              padding: "3px",
              border: color === 2 ? "2px solid gray" : "none",
              height: "30px",
              width: "30px",
              borderRadius: "100%",
            }}
          >
            <p
              style={{
                backgroundColor: "green",
                height: "20px",
                width: "20px",
                borderRadius: "100%",
              }}
              onClick={() => setColor(2)}
            ></p>
          </div>
          <div
            style={{
              padding: "3px",
              border: color === 3 ? "2px solid gray" : "none",
              height: "30px",
              width: "30px",
              borderRadius: "100%",
            }}
          >
            <p
              style={{
                backgroundColor: "yellow",
                height: "20px",
                width: "20px",
                borderRadius: "100%",
              }}
              onClick={() => setColor(3)}
            ></p>
          </div>
        </div>
        <div>
          <p>Quantity</p>
          <div className="row justify-content-center mb-4">
            <button
              style={{
                border: "none",
                backgroundColor: "#deebe8",
                width: "30px",
                borderRadius: "5px",
                marginRight: "10px",
              }}
              onClick={() =>
                setQuantity((prevState) => (prevState <= 1 ? 1 : prevState - 1))
              }
            >
              -
            </button>
            {quantity}
            <button
              style={{
                border: "none",
                backgroundColor: "#deebe8",
                width: "30px",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
              onClick={() => setQuantity((prevState) => prevState + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <p>{detailsProduct[0].description}</p>
      <button
        class="btn btn-primary"
        style={{ width: "100%", height: "" }}
        onClick={() => handleClick(detailsProduct[0], quantity)}
      >
        <ShoppingCart className="pt-1" /> ADD TO CART
      </button>
    </div>
  );
};

export default Description;
