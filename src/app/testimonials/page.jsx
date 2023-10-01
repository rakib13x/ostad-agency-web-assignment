import React from "react";
import Contacts from "@/components/Contacts";
import Testimonial from "@/components/Testimonial";
import Breadcrumb from "@/components/BreadCrumbs";

const Page = () => {
  return (
    <>
      <Breadcrumb />
      <Testimonial />
      <Contacts />
    </>
  );
};

export default Page;
