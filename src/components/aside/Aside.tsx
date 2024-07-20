import React from "react";
const Aside = ({ children }: { children: React.ReactNode }) => {
  return <nav className=" mt-4 sm:flex flex-col gap-2">{children}</nav>;
};

export default Aside;
