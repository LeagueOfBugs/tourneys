import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Button } from "./button";
import { MenuIcon } from "lucide-react";
import Aside from "../layout/aside/Aside";
import Header from "../layout/aside/Header";
import NavItems from "../layout/aside/NavItems";

const DrawerTrigger = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <MenuIcon className="h-4 w-4" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 bg-muted/40 p-4 pt-14">
        <Aside>
          <NavItems />
        </Aside>
      </SheetContent>
    </Sheet>
  );
};

export default DrawerTrigger;
