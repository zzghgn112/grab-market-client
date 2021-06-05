import React from "react";
import "./index.css";

function Maincontent() {
  var products = [
    {
      name: "축구공",
      price: "1000",
      seller: "메시",
      pic_url: "products/soccerball1.jpg",
    },
    {
      name: "농구공",
      price: "1000",
      seller: "조던",
      pic_url: "products/basketball1.jpeg",
    },
    {
      name: "키보드",
      price: "1000",
      seller: "페이커",
      pic_url: "products/keyboard1.jpg",
    },
  ];

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="banners/banner1.png" />
        </div>
        <h1>판매되는 상품</h1>
        <div id="product-list">
          <div className="product-card">
            <div>
              <img className="product-img" src={products[0].pic_url} />
            </div>
            <div className="product-contents">
              <span className="product-name">{products[0].name}</span>
              <span className="product-price">{products[0].price}</span>
              <div className="product-seller">
                <img className="product-avatar" src="icons/avatar.png" />
                <span>{products[0].seller}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default Maincontent;
