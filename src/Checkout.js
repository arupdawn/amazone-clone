import React from "react";
import "./Checkout.css";
import Amazon_adBgImage from "./Images/Amazon-banner-ad.jpg";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={Amazon_adBgImage} alt="" />
        <div>
          <h3 className="checkout__titleUserEmail">Hey, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket !!!</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
