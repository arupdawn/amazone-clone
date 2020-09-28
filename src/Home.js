import React from "react";
import "./Home.css";
import homeBgImage from "./Images/Amazon_body_background.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={homeBgImage} alt="" />

        <div className="home__row">
          <Product
            id={30}
            title="Harry Potter and the Prisoner of Azkaban (Harry Potter 3) Paperback – 3 September 2014"
            price={380}
            image="https://m.media-amazon.com/images/I/91uix57X+jL._AC_UY218_.jpg"
            rating={5}
          />

          <Product
            id={40}
            title="Apple iPhone 11 (64GB) - White"
            price={63999}
            image="https://m.media-amazon.com/images/I/51o5RmQtroL._AC_UY218_.jpg"
            rating={5}
          />

          <Product
            id={50}
            title="Fastrack White Dial Chronograph Watch for Guys | BIG TIME Leather Strap watch"
            price={5095}
            image="https://staticimg.titan.co.in/Fastrack/Catalog/3072SL01_2.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={20}
            title="Puma Sf Future Cat Ultra Adults Unisex Red Ferrari Fanwear Rosso Corsa White Sneakers-7 UK (40.5 EU) (8 US) (30624101_7)"
            price={3999}
            image="https://images-na.ssl-images-amazon.com/images/I/71s0%2BHg5aXL._UX695_.jpg"
            rating={5}
          />

          <Product
            id={21}
            title="Dell Latitude E5440 Core I5 4th Gen Windows 10 Pro Refurbished Laptop"
            price={38500}
            image="https://www.laptopstoreindia.com/image/cache/catalog/Dell%20New/dell%20e5440-800x800.jpeg" 
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={60}
            title="Samsung 108 cm (43 Inches) Wondertainment Series Ultra HD LED Smart TV UA43TUE60FKXXL (Black) (2020 model)"
            price={36999}
            image="https://images-na.ssl-images-amazon.com/images/I/81PlpqW%2BqaL._SX450_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
