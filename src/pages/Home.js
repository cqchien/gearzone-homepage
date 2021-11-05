import React from "react";
import Slider from "../components/Slider/index";
import Category from "../components/Category/index";
import FeaturedProducts from "../components/FeaturedProducts/index";
import HotSellingAccessories from "../components/HotSellingAccessories/index";

export default function Home() {
  return (
    <>
      <Slider />
      <Category />
      <FeaturedProducts />
      <HotSellingAccessories
        title="HOT PROMOTION KEYBOARD - FREE DELIVERY"
        category="KEYBOARD"
      />
      <HotSellingAccessories
        title="CHEAP MOUSE - FREE SHIPPING"
        category="MOUSE"
      />
      <HotSellingAccessories
        title="GEARZONE PADS - FREE NATIONWIDE SHIPPING"
        category="PAD"
      />
    </>
  );
}
