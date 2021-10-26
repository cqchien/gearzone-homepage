import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaPhoneVolume,
  FaNewspaper,
  FaUserEdit,
} from "react-icons/fa";
import "./TopBar.scss";
import { useDispatch } from "react-redux";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  let objInfoUser = {};

  const handleLogout = () => {
    let answer = window.confirm("Are you sure about that ?");
    if (answer) {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("userSignUp");
    }
  };

  const handleGetInfoUser = (id) => {
    console.log("handleGetInfoUser - id", id);
  };

  // const { dataUpdateUser } = useSelector(
  //   (state) => state.updateInfoUserReducer
  // );

  console.log(objInfoUser._id);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="top-bar">
      <div className="container">
        <ul className="top-bar-right">
          <li>
            <a href="tel: 0123456789">
              <FaPhoneAlt className="top-bar-icon"></FaPhoneAlt>
              <span>Shopping Advice: 012 345 6798</span>
            </a>
          </li>
          <li>
            <a href="tel: 0123456789">
              <FaPhoneVolume className="top-bar-icon"></FaPhoneVolume>
              <span>Customer Care: 099 800 8310</span>
            </a>
          </li>
          <li>
            <a href="https://gvn360.com/">
              <FaNewspaper className="top-bar-icon"></FaNewspaper>
              <span>Technology News</span>
            </a>
          </li>
          <li>
            <a href="https://gvn360.com/">
              <FaUserEdit className="top-bar-icon"></FaUserEdit>
              <span>Recruitment</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
