import React from "react";
import Profile from "./Profile/Profile";
import Dashboard from "./Dashboard/Dashboard";
import styling from "./Main.module.css";

function Main() {
  return (
    <div className={styling.Main}>
      <Profile />
      <Dashboard />
    </div>
  );
}

export default Main;
