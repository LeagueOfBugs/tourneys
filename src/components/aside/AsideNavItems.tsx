import React from "react";
import {
  CalendarIcon,
  PlusIcon,
  SettingsIcon,
  TrophyIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { getTournaments } from "@/lib/data";

const AsideNavItems = async () => {
  const tournaments = await getTournaments();
  const hasTournaments = tournaments && tournaments.length > 0;
  return (
    <>
      <Link
d        href="/tournament/create"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        prefetch={false}
      >
        <PlusIcon className="h-4 w-4" />
        Create Tournament
      </Link>
      {hasTournaments &&
        tournaments.map((tournament) => (
          <Link
            key={tournament.id}
            href={`/tournament/${tournament.id}`}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            prefetch={false}
          >
            <UsersIcon className="h-4 w-4" />
            {tournament.name}
          </Link>
        ))}
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
