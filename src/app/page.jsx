import Brands from "@/components/Brands";
import Contacts from "@/components/Contacts";
import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Stats from "@/components/Stats";
import WorkList from "@/components/WorkList";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Brands />
      <WorkList />
      <Stats />
      <FeaturedProject />
      <Contacts />
    </>
  );
};

export default page;
