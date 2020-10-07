import React from "react";
import styling from "./Profile.module.css";
import UserDetails from "./UserDetails/UserDetails";
import CompanyDetails from "./CompanyDetails/CompanyDetails";

function Profile() {
  return (
    <div className={styling.Profile}>
      <UserDetails />
      <CompanyDetails />
    </div>
  );
}

export default Profile;
