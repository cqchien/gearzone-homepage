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

export default function Header() {
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
        setResult(result);
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
              src="/images/logoGZ.png"
              alt="Logo"
              className={result ? "imgLogoScroll" : "imgLogo"}
            ></img>
          </Link>
          <InputGroup
            className="HeaderMiddle_search col-6 "
            style={{ maxWidth: "50%" }}
          >
            <Input className="HeaderMiddle_input" placeholder="Search..." />
            <InputGroupAddon addonType="append">
              <Button className="HeaderMiddle_btnSearch">
                <span>Search</span>
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <div className="HeaderMiddle_icon col-3">
            <Link className=" HeaderMiddle_shoppingcart" to="/myshoppingcart">
              <div className="shoppingcart_container">
                <FaShoppingCart className="HeaderMiddle_iconShoppingCart"></FaShoppingCart>
                <span className="HeaderMiddle_amountShoppingCart">
                  {amountOrderCart}
                </span>
              </div>
              <span className="HeaderMiddle_shoppingcart-name">Cart</span>
            </Link>
            <div className=" HeaderMiddle_shoppingcart">
              <div className="shoppingcart_container">
                <FaUserCircle className="HeaderMiddle_iconShoppingCart"></FaUserCircle>
              </div>
              <span className="HeaderMiddle_shoppingcart-name">Account</span>
              <FaAngleDown
                className="HeaderTop_Right-BtnIcon"
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
