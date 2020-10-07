import React from "react";
import Section from "../Section";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Product() {
  return (
    <Section
      title="hello it is demo product"
      subtitle="demo subtitle"
      icon={<IoIosAddCircleOutline />}
    />
  );
}
