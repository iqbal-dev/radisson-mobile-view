import React from "react";
import { Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cart/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList.cartItems);
  console.log(cartList);
  let totalPrice = 0;
  cartList.forEach((data) => (totalPrice += data.price));
  const removeItems = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="container overflow-auto">
      {cartList?.map((data) => (
        <div
          key={data.id}
          className="mt-3 d-flex align-items-center "
          style={{ boxShadow: "#d9d2d2 0 0 5px 5px", borderRadius: "5px" }}
        >
          <div className="col-3">
            <img className="img-fluid" src={data.featureImage} alt="" />
          </div>
          <div className="col-6 py-3">
            <h5>{data.name}</h5>
            <p style={{ margin: "0", color: "#707070" }}>
              Quantity: {data.quantity}
            </p>
            <p style={{ margin: "0", color: "#707070" }}>Color: {data.color}</p>
            <p
              class="d-flex align-items-center pt-2"
              style={{ color: "#005DFF", margin: "0", cursor: "pointer" }}
              onClick={() => removeItems(data.id)}
            >
              {" "}
              <Trash2 />
              <span>Remove</span>
            </p>
          </div>
          <div className="col-3">
            <p style={{ color: "#005DFF" }}>${data.price}</p>
          </div>
        </div>
      ))}
      <div
        className="d-flex justify-content-between mt-5 align-items-center py-3"
        style={{ backgroundColor: "#E9F2FE", borderRadius: "10px" }}
      >
        <div className="col-5">
          <p>Total Price for {cartList.length} item(s)</p>
          <p style={{ color: "#005DFF", fontSize: "30px" }}>${totalPrice}</p>
        </div>
        <div className="col-5">
          <button
            className="btn btn-primary py-3"
            style={{
              width: "100%",
              border: "none",
              borderRadius: "7px",
              backgroundColor: "#005DFF",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
