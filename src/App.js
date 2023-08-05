import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Gallery from "./components/Gallery/Gallery";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {


  return (
    <>
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
