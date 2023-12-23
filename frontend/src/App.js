import Home from "./components/Home";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Productdetails from "./components/Productdetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details" element={<Productdetails />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
