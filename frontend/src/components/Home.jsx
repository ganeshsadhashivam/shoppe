import React from "react";
import "./Home-module.css";
import NavBar from "./layouts/NavBar";
import Carousel from "./Carousel";
import P1 from "../assets/homeappliances.webp";
import P2 from "../assets/girls.jpeg";
import P3 from "../assets/mens.jpg";
import P4 from "../assets/shoppe.png";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
const prod = [
  "https://miro.medium.com/v2/resize:fit:994/1*fYnlXMbHiWUBMz9Xhleq0A.png",
  "https://www.sahivalue.com/product-images/14+pro+max.jpg/293890000021697778/400x400",
  "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2023/4/299324335/QI/CC/GK/141620873/series-8-smart-watch-500x500.jpg",
];
const Home = () => {
  return (
    <div className="home">
      <Header />
      <NavBar />
      <Carousel />
      <div className="products">
        {/* <div className="product-container"> */}
        {prod.map((data) => {
          return (
            <div className="product-container">
              <img src={data} alt="" width={"100"} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
    // </div>
  );
};

export default Home;
