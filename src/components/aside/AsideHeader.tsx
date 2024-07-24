import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { BellIcon, TrophyIcon } from "lucide-react";
import DrawerTrigger from "@/components/ui/DrawerTrigger";
import { ThemeToggle } from "../ui/ThemeToggle";

const AsideHeader = () => {
  return (
    <header className="flex h-[60px] items-center bg-muted/40 px-6">
      <Link
        href="/tournament"
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
        <ThemeToggle />
        <div className="sm:hidden">
          <DrawerTrigger />
        </div>
      </div>
    </header>
  );
};

export default AsideHeader;
