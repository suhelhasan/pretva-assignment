import React from "react";
import styling from "./Header.module.css";
import Logo from "../../../images/logo.png";
import { BsBellFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <div className={styling.Header}>
      <img src={Logo} alt="pretVA" className={styling.icon} />
      <div className={styling.navLinks}>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Search</a>
        <a href="/">Feedback & Support</a>
      </div>
      <div className={styling.accountsInfo}>
        <BsBellFill className={styling.bellIcon} />
        <select className={styling.accountDropDown}>
          <option>My Account</option>
          <option>Settings</option>
          <option>Info</option>
        </select>
        <button className={styling.logoutButton}>Logout</button>
      </div>
      <FiMenu className={styling.responsiveMenu} />
    </div>
  );
}
