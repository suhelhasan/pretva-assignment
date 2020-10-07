import React from "react";
import { MdLocationOn, MdStar, MdMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

import styling from "./UserDetails.module.css";

function UserDetails() {
  return (
    <div className={styling.UserDetails}>
      <div className={styling.userProfile}>
        <div className={styling.userAvatar}>
          <FaRegUser />
        </div>
        <h3>Rohit Gupta</h3>
        <p>Supplier, Sahara Fabrics Pvt. Ltd.</p>
      </div>
      <p>Company GSTIN - 123456789012345</p>

      <div className={styling.userInfo}>
        <div>
          <MdLocationOn className={styling.logos} /> New Delhi, India
        </div>
        <div>
          <MdStar className={styling.logos} /> 4.5 (209)
        </div>
        <div>
          <MdMail className={styling.logos} /> rohit.gupta@gmail.com
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
