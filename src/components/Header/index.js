import React, { useEffect, useState } from "react";
import {
  Navbar,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Collapse,
} from "reactstrap";
import { FaAngleDown, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header({ isScroll }) {
  const [isOpen, setIsOpen] = useState(false);

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

  const [amountOrderCart, setAmount] = useState(arrayIdOrderCart.length);

  const abortController = new AbortController();
  const signal = abortController.signal;

  useEffect(() => {
    const handleScrollHeader = () => {
      if (window.scrollY >= 10) {
        setResult(result | isScroll);
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
    <div className={result ? "Header scroll" : "Header"}>
      <div className="container">
        <Navbar className="Header_navbar row">
          <Link to="/" className="Header_navbrand col-3">
            <img
              src="/images/logoGZ.png"
              alt="Logo"
              className={result ? "imgLogoScroll" : "imgLogo"}
            ></img>
          </Link>
          <InputGroup
            className="Header_search col-6 "
            style={{ maxWidth: "50%" }}
          >
            <Input className="Header_input" placeholder="Search..." />
            <InputGroupAddon addonType="append">
              <Button className="Header_btnSearch">
                <span>Search</span>
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <div className="Header_icon col-3">
            <Link className=" Header_shoppingcart" to="/myshoppingcart">
              <div className="shoppingcart_container">
                <FaShoppingCart className="Header_iconShoppingCart"></FaShoppingCart>
                <span className="Header_amountShoppingCart">
                  {amountOrderCart}
                </span>
              </div>
              <span className="Header_shoppingcart-name">Cart</span>
            </Link>
            <div className=" Header_shoppingcart">
              <div className="shoppingcart_container">
                <FaUserCircle className="Header_iconShoppingCart"></FaUserCircle>
              </div>
              <span className="Header_shoppingcart-name">Account</span>
              <FaAngleDown
                className="TopBar_Right-BtnIcon"
                onClick={() => setIsOpen(!isOpen)}
              ></FaAngleDown>
              <Collapse className="Header-Collapse" isOpen={isOpen}>
                {localStorage.getItem("auth_token") === null ? (
                  <ul>
                    <li>
                      <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                      <Link to="/signup">Sign Up</Link>
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <Link to="/user" onClick={() => console.log("user")}>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/logout" onClick={() => console.log("login")}>
                        Log Out
                      </Link>
                    </li>
                  </ul>
                )}
              </Collapse>
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
}
