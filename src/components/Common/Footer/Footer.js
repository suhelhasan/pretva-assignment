import React from "react";
import styling from "./Footer.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

function Footer() {
  return (
    <div className={styling.Footer}>
      <div className={styling.FooterContent}>
        <h3 className={styling.getInTouch}>Get In Touch!</h3>
        <div className={styling.location}>
          <p className={styling.heading}>Location</p>
          <p>Bengaluru, Karnataka, India</p>
        </div>
        <div className={styling.contact}>
          <p className={styling.heading}>Contact</p>
          <a href="/">support@pretva.com</a>
        </div>
        <div className={styling.socialHandles}>
          <p className={styling.heading}>Follow</p>
          <a href="/">
            <FaFacebookF />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <RiLinkedinFill />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
