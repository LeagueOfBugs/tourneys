import React from "react";
import {
  CalendarIcon,
  PlusIcon,
  SettingsIcon,
  TrophyIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

const AsideNavItems = () => {
  return (
    <>
      <Link
        href="/dashboard/tournament/create"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        prefetch={false}
      >
        <PlusIcon className="h-4 w-4" />
        Create Tournament
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        prefetch={false}
      >
        <UsersIcon className="h-4 w-4" />
        Teams & Players
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        prefetch={false}
      >
        <CalendarIcon className="h-4 w-4" />
        Match Schedule
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        prefetch={false}
      >
        <TrophyIcon className="h-4 w-4" />
        Leaderboard
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        prefetch={false}
      >
        <SettingsIcon className="h-4 w-4" />
        Settings
      </Link>
    </>
  );
};

export default AsideNavItems;
