import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import "./HeaderMiddle.scss";
import { Link, Redirect } from "react-router-dom";

export default function HeaderMiddle(props) {
  // // Love Product
  // let loveProduct = JSON.parse(localStorage.getItem("wishList"));
  // let arrayIdLoveProduct = Object.keys(loveProduct);

  // // Order Product
  // let orderCart = JSON.parse(localStorage.getItem("orderCart"));
  // let arrayIdOrderCart = Object.keys(orderCart);

  // const [amountLove, setamountLove] = useState(arrayIdLoveProduct.length);
  // const [amountOrderCart, setamountOrderCart] = useState(
  //   arrayIdOrderCart.length
  // );

  let { isScroll } = props;

  // Wish list
  let wishList = localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList"))
    : [];
  let arrayIdWishList = Object.keys(wishList);

  // Order Cart
  let orderCart = localStorage.getItem("orderCart")
    ? JSON.parse(localStorage.getItem("orderCart"))
    : [];
  let arrayIdOrderCart = Object.keys(orderCart);

  const [result, setResult] = useState(false);
  const [amountLoveProduct, setAmountLoveProduct] = useState(
    arrayIdWishList.length
  );
  const [amountOrderCart, setAmount] = useState(arrayIdOrderCart.length);

  const abortController = new AbortController();
  const signal = abortController.signal;

  useEffect(() => {
    const handleScrollHeader = () => {
      if (window.scrollY >= 10) {
        setResult(result || isScroll);
      } else {
        setResult(false);
      }
    };
    window.addEventListener("scroll", handleScrollHeader);
    return function cleanup() {
      abortController.abort();
    };
  }, [result]);

  return (
    <div className={result ? "HeaderMiddle scroll" : "HeaderMiddle"}>
      <div className="container">
        <Navbar className="HeaderMiddle_navbar row">
          <Link to="/" className="HeaderMiddle_navbrand col-3">
            <img
              src="/images/logoVVVheader.png"
              alt="Logo"
              className={result ? "imgLogoScroll" : "imgLogo"}
            ></img>
          </Link>
          <InputGroup
            className="HeaderMiddle_search col-6 "
            style={{ maxWidth: "50%" }}
          >
            <Input
              className="HeaderMiddle_input"
              placeholder="Tìm kiếm Sản phẩm..."
            />
            <InputGroupAddon addonType="append">
              <Button className="HeaderMiddle_btnSearch">
                <span>Tìm kiếm</span>
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <Link className="HeaderMiddle_icon col-3" to="/myloveproduct">
            <button className="HeaderMiddle__btn-heart">
              <FaRegHeart className="HeaderMiddle_iconHeart"></FaRegHeart>
              <span className="HeaderMiddle_amountHeart">
                {amountLoveProduct}
              </span>
            </button>
            <Link className="HeaderMiddle_shoppingcart" to="/myshoppingcart">
              <div className="shoppingcart_container">
                <FaShoppingCart className="HeaderMiddle_iconShoppingCart"></FaShoppingCart>
                <span className="HeaderMiddle_amountShoppingCart">
                  {amountOrderCart}
                </span>
              </div>
              <span className="HeaderMiddle_shoppingcart-name">Giỏ hàng</span>
            </Link>
          </Link>
        </Navbar>
      </div>
    </div>
  );
}
