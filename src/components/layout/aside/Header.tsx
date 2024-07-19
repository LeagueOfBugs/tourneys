import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { BellIcon, TrophyIcon } from "lucide-react";
import DrawerTrigger from "@/components/ui/DrawerTrigger";

const Header = () => {
  return (
    <header className="flex h-[60px] items-center border-b bg-muted/40 px-6">
      <Link
        href="#"
        className="flex items-center gap-2 font-semibold"
        prefetch={false}
      >
        <TrophyIcon className="h-6 w-6" />
        <span>Tournament Manager</span>
      </Link>
      <div className="ml-auto flex items-center gap-4">
        <Button variant="outline" size="icon" className="h-8 w-8">
          <BellIcon className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <div className="sm:hidden">
          <DrawerTrigger />
        </div>
      </div>
    </header>
  );
};

export default Header;
