import React from "react";
import Team from "@/components/Team";
import Contacts from "@/components/Contacts";
import Breadcrumb from "@/components/BreadCrumbs";

const Page = () => {
  return (
    <>
      <Breadcrumb />
      <Team />
      <Contacts />
    </>
  );
};

export default Page;
