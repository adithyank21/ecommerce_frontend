import React, { useEffect, useState } from "react";
import "../CSS/home.css";
import Footer from "./footer";
import ProductPage from "../pages/productPage";

function Home() {
  return(
    <>
    
    <div>
      <ProductPage />
      {/* <Footer /> */}
    </div>
    </>
  );
}

export default Home;


