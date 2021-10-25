import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

export default function Header(props) {
  const {isScroll} = props;
  return (
    <header>
      <HeaderTop></HeaderTop>
      <HeaderMiddle isScroll={isScroll}></HeaderMiddle>
      <HeaderBottom></HeaderBottom>
    </header>
  );
}
