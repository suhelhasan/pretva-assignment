import React from "react";
import Section from "../Section";
import { BiMessageDetail } from "react-icons/bi";

export default function Ratings() {
  return (
    <Section
      title="You have got no reviews! Message Current and Past Clients to
provide Ratings & Reviews and enhance your profile!"
      subtitle="Click on the below icon to message!"
      icon={<BiMessageDetail />}
    />
  );
}
