import React from "react";
import styling from "./CompanyDetails.module.css";
import { MdSettings } from "react-icons/md";

function CompanyDetails() {
  return (
    <div className={styling.CompanyDetails}>
      <div className={styling.option}>Company Profile</div>
      <div className={styling.option}>Deal Requests & Wishlists</div>
      <div className={styling.option}>Clients & Payments</div>
      <div className={styling.option}>Chat history</div>
      <div className={`${styling.option} ${styling.emptyDiv}`}></div>
      <div className={`${styling.option} ${styling.editProfile}`}>
        <MdSettings /> Edit Profile
      </div>
      <div className={`${styling.option} ${styling.buyProducts}`}>
        Wish to buy products? <a href="/">Click Here</a>
      </div>
    </div>
  );
}

export default CompanyDetails;
