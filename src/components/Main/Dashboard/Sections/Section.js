import React from "react";
import styling from "./Section.module.css";

function Section({ title, subtitle, icon }) {
  return (
    <div className={styling.Section}>
      <p>{title}</p>
      <p>{subtitle}</p>
      <div>{icon}</div>
    </div>
  );
}

export default Section;
