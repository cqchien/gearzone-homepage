import React, { useState } from "react";
import { Collapse, Button, Nav, NavItem } from "reactstrap";
import { FaList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import "./HeaderBottom.scss";
import { Link, NavLink } from "react-router-dom";

export default function HeaderBottom() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const { categoriesInfo, isLoading, error } = useSelector(
  //   (state) => state.categoriesReducer
  // );
  const categoriesInfo = [{ name: "Phone" }, { name: "Laptop" }];

  return (
    <div className="HeaderBottom">
      <div className="container">
        <div className="row">
          <div className="HeaderBottom_AllCategory col-3 d-none d-md-block">
            <Button className="HeaderBottom_btnCategory" onClick={toggle}>
              <span className="HeaderBottom_Text">All Category</span>
              <FaList className="HeaderBottom_Icon"></FaList>
            </Button>
            <Collapse className="HeaderBottom_Collapse" isOpen={isOpen}>
              <ul>
                {categoriesInfo &&
                  categoriesInfo.map((item) => (
                    <li>
                      <Link to="#">{item.name}</Link>
                    </li>
                  ))}
                {/* <li>
                  <Link to="#">Laptop</Link>
                </li>
                <li>
                  <Link to="#">Điện thoại</Link>
                </li>
                <li>
                  <Link to="#">PC Gaming</Link>
                </li>
                <li>
                  <Link to="#">Bàn phím</Link>
                </li>
                <li>
                  <Link to="#">Chuột</Link>
                </li> */}
              </ul>
            </Collapse>
          </div>
          <div className="HeaderBottom_NavMenu col-md-9">
            <Nav className="HeaderBottom_Nav">
              <NavItem className="HeaderBottom_NavItem">
                <NavLink
                  activeClassName="HeaderBottom_NavLinkSelected"
                  className="HeaderBottom_NavLink"
                  to="/products"
                >
                  Sản phẩm
                </NavLink>
              </NavItem>
              <NavItem className="HeaderBottom_NavItem">
                <NavLink
                  activeClassName="HeaderBottom_NavLinkSelected"
                  className="HeaderBottom_NavLink"
                  to="/news"
                >
                  Tin tức
                </NavLink>
              </NavItem>
              <NavItem className="HeaderBottom_NavItem">
                <NavLink
                  activeClassName="HeaderBottom_NavLinkSelected"
                  className="HeaderBottom_NavLink"
                  to="/about"
                >
                  Giới thiệu
                </NavLink>
              </NavItem>
              <NavItem className="HeaderBottom_NavItem">
                <NavLink
                  activeClassName="HeaderBottom_NavLinkSelected"
                  className="HeaderBottom_NavLink"
                  to="/contact"
                >
                  Liên hệ
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
}
