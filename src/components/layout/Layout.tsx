import React from "react";
import Header from "../aside/AsideHeader";
import Aside from "../aside/Aside";
import MainHeader from "../ui/MainHeader";
import NavItems from "../aside/AsideNavItems";
import { ThemeProvider } from "../theme/theme-provider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
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
     </ThemeProvider>
  );
};

export default Layout;
