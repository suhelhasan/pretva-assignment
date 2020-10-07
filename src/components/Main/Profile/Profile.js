import React, { useContext } from "react";
import styling from "./Profile.module.css";
import UserDetails from "./UserDetails/UserDetails";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import { Context } from "../../../context/context";

function Profile() {
  let { tasks } = useContext(Context);
  if (!tasks.sidebar) {
    return null;
  }
  return (
    <div className={styling.Profile}>
      <UserDetails />
      <CompanyDetails />
    </div>
  );
}

export default Profile;
