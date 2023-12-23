import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/NavBar";
import "./Productdetails-module.css";
const Productdetails = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="products-details-layout">
        <div>
          <img
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61U+PeXZIwL._AC_UF1000,1000_QL80_.jpg"
            alt=""
            className="product-diff-img"
          />

          <img
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61U+PeXZIwL._AC_UF1000,1000_QL80_.jpg"
            alt=""
            className="product-diff-img"
          />

          <img
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61U+PeXZIwL._AC_UF1000,1000_QL80_.jpg"
            alt=""
            className="product-diff-img"
          />

          <img
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61U+PeXZIwL._AC_UF1000,1000_QL80_.jpg"
            alt=""
            className="product-diff-img"
          />
        </div>
        <div>
          <div id="product-detail-border">
            <img
              src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61U+PeXZIwL._AC_UF1000,1000_QL80_.jpg"
              alt=""
            />
          </div>
          <div className="buttons-products-details">
            <button id="add-to-cart">Add To Cart</button>
            <button id="buy-now">Buy Now</button>
          </div>
        </div>
        <div className="product-description">
          <p style={{ fontSize: "2rem" }}>
            {" "}
            Acer 21.5 inch Full HD VA Panel with VGA, HDMI, Ergonomic Stand,
            2X2W Inbuilt Speakers, ZeroFrame Design Monitor (KA222Q) (AMD Free
            Sync, Response Time: 1 ms, 100 Hz Refresh Rate) 4.33,697 Ratings &
            460 Reviews
          </p>
          <p style={{ color: "green" }}>Special price</p>
          <p style={{ fontSize: "1.5rem" }}>₹5,604</p>
          <h4>Coupons for you</h4>
          <ul>
            <li>
              Special PriceGet extra 5% off upto ₹1000 on 1 item(s) (price
              inclusive of cashback/coupon)T&C Available offers
            </li>
            <li>
              Bank Offer10% off on HDFC Bank Credit Card EMI Transactions, up to
              ₹1,500 on orders of ₹7,500 and aboveT&C
            </li>
            <li>
              Bank Offer10% off on Federal Bank Credit Card and Credit EMI Txns,
              up to ₹2,000 on orders of ₹5,000 and aboveT&C
            </li>
            <li>
              Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions,
              up to ₹2,000 on orders of ₹5,000 and aboveT&C
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productdetails;
