import React from "react";
import Header from "./aside/Header";
import Aside from "./aside/Aside";
import MainHeader from "./MainHeader";
import NavItems from "./aside/NavItems";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sm:grid min-h-screen w-full grid-cols-[300px_1fr] bg-background">
      <div className="flex flex-col border-r bg-muted/40 p-4">
        <Header />
        <div className="hidden sm:block">
          <Aside>
            <NavItems />
          </Aside>
        </div>
      </div>
      <div className="flex flex-col">
        <MainHeader />
        {children}
      </div>
    </div>
  );
};

export default Layout;
