import React from "react";
import Header from "../components/Header/index";
import Slider from "../components/Slider/index";
import Category from "../components/Category/index";
import Footer from "../components/Footer/index";
import FeaturedProducts from "../components/FeaturedProducts/index";
import HotSellingAccessories from "../components/HotSellingAccessories/index";
import TopBar from "../components/TopBar/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header isScroll={true}></Header>
      <Slider></Slider>
      <Category></Category>
      <FeaturedProducts></FeaturedProducts>
      <HotSellingAccessories></HotSellingAccessories>
      <Footer></Footer>
    </>
  );
}
