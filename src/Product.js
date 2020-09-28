import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  /*console.log("This is the basket >>>> ", basket);*/

  const addToBasket = () => {
    // Dispatch the item into DataLayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <CurrencyFormat
            renderText={(value) => <strong className="">{value}</strong>}
            thousandSeparator={true}
            decimalScale={2}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹ "}
          />
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt={title} />

      <button onClick={addToBasket}> Add to Basket </button>
    </div>
  );
}

export default Product;
