import React from "react";

const Breadcrumb = ({ pathname }) => {
  if (typeof pathname !== "string" || pathname.trim() === "") {
    return null;
  }

  const paths = pathname.split("/").filter((path) => path !== "");
  const breadcrumbItems = paths.map((path, index) => {
    const link = "/" + paths.slice(0, index + 1).join("/");
    return (
      <React.Fragment key={path}>
        {index > 0 && " > "}
        <a href={link}>{path}</a>
      </React.Fragment>
    );
  });

  return (
    <div className="px-[120px] pb-[60px] space-y-6 bg-green-100">
      <h1 className="font-bold text-3xl pt-[80px] ">{breadcrumbItems}</h1>
      <span>Home </span>
      &gt; {breadcrumbItems}
    </div>
  );
};

export default Breadcrumb;
