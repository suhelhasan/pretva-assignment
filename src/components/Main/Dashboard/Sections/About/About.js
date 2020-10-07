import React from "react";
import Section from "../Section";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function About() {
  return (
    <Section
      title="Providing relavant information and details about your
company and products you deal in will help potential clients
trust your company and reach out for the right products!"
      subtitle="Click on the icon below to get started!"
      icon={<IoIosAddCircleOutline />}
    />
  );
}
