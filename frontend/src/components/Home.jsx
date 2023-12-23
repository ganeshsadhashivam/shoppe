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
import { useNavigate } from "react-router";
const prod = [
  {
    id: 1,
    img: "https://miro.medium.com/v2/resize:fit:994/1*fYnlXMbHiWUBMz9Xhleq0A.png",
    name: "Atomic Habit",
    price: 500,
  },
  {
    id: 2,
    img: "https://www.sahivalue.com/product-images/14+pro+max.jpg/293890000021697778/400x400",
    name: "Iphone",
    price: 500,
  },
  {
    id: 3,
    img: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
    name: "Mac",
    price: 500,
  },
  {
    id: 4,
    img: "https://5.imimg.com/data5/SELLER/Default/2023/4/299324335/QI/CC/GK/141620873/series-8-smart-watch-500x500.jpg",
    name: "Watch",
    price: 500,
  },
  {
    id: 5,
    img: "https://images.penguinrandomhouse.com/cover/9780143130727",
    name: "ikigai",
    price: 500,
  },

  // "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/315sXDgx3YL.jpg",
  // "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61U+PeXZIwL._AC_UF1000,1000_QL80_.jpg",
];

const images = [
  "https://v3c2s3z8.rocketcdn.me/wp-content/uploads/2023/06/1st-Banner-Replace.png",
  "https://www.nurepublic.co/cdn/shop/files/smartwwatch_34568a4a-a843-4703-8222-b60257a90fac.jpg?v=1699252773&width=2800",
  "https://www.designeroutletgdansk.pl/fileadmin/user_upload/Levis_header.png",
  "https://www.houseofbruar.com/images/blogs/large/levis-banner.jpg",
  "https://abnd.in/wp-content/uploads/2019/02/1-3-1.jpg",
  "https://i.ytimg.com/vi/9OsCsd3SDmk/maxresdefault.jpg",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://blog.researchandranking.com/wp-content/uploads/2022/11/Titan.jpg",
];
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Header />
      <NavBar />
      <Carousel images={images} />
      <div className="products">
        {/* <div className="product-container"> */}
        {prod.map((data) => {
          const { id, name, img, price } = data;
          return (
            <div
              className="product-container"
              onClick={() => navigate("/product-details")}
            >
              <img src={img} alt="" width={"100"} />
              <span id="name">{name}</span>
              <span id="price">From{price}</span>
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
