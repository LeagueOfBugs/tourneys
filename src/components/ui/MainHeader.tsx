import React from "react";
import { Button } from "../ui/button";

const MainHeader = () => {
  return (
    <header className="hidden sm:flex h-[60px] items-center border-b bg-muted/40 px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>
    </header>
  );
};

export default MainHeader;
