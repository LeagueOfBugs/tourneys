import Link from "next/link";
import React from "react";

import NavItems from "./NavItems";
const Aside = ({ children }: { children: React.ReactNode }) => {
  return <nav className=" mt-4 sm:flex flex-col gap-2">{children}</nav>;
};

export default Aside;
