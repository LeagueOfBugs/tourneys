import EmptyState from "@/components/tournament/EmptyState";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getTournaments } from "@/lib/data";
import Link from "next/link";
import React from "react";

const TournamentPage = async () => {
  const tournaments = await getTournaments();
  console.log(tournaments);
  const renderEmtpyState = () => {
    if (!tournaments?.length) {
      return <EmptyState />;
    }
  };

  const hasTournaments = tournaments && tournaments.length > 0;

  return (
    <div className="grid grid-cols-2">
      {hasTournaments &&
        tournaments.map((tournament) => (
          <>
            <Link href={`/tournament/${tournament.id}`}>
              <Card key={tournament.id} className="bg-white w-[300px]">
                <CardHeader>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Name: {tournament.name}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="mt-2 text-sm text-gray-500">
                    Desc: {tournament.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm text-gray-500">Start Date:</span>
                    <span className="text-sm text-gray-900">
                      {tournament.start_date.toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm text-gray-500">End Date:</span>
                    <span className="text-sm text-gray-900">
                      {tournament.end_date.toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      Number of Teams:
                    </span>
                    <span className="text-sm text-gray-900">
                      {tournament.number_of_teams}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm text-gray-500">Sport:</span>
                    <span className="text-sm text-gray-900">
                      {tournament.sport}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      Tournament Type:
                    </span>
                    <span className="text-sm text-gray-900">
                      {tournament.tournament_type}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </>
        ))}
      {renderEmtpyState()}
    </div>
  );
};

export default TournamentPage;
