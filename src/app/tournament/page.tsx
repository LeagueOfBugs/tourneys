import deleteTournament from "@/actions/deleteTournament";
import EmptyState from "@/components/tournament/EmptyState";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getTournaments } from "@/lib/data";
import React from "react";

const TournamentPage = async () => {
  const tournaments = await getTournaments();
  const renderEmtpyState = () => {
    console.log("tournaments", Boolean(tournaments));
    if (!tournaments?.length) {
      return <EmptyState />;
    }
  };

  const hasTournaments = tournaments && tournaments.length > 0;

  return (
    <div>
      {hasTournaments &&
        tournaments.map((tournament) => (
          <Card key={tournament.id}>
            <CardHeader>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {tournament.name}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mt-2 text-sm text-gray-500">
                {tournament.description}
              </p>
            </CardContent>
            <CardFooter>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-sm text-gray-500">Start Date:</span>
                <span className="text-sm text-gray-900">
                  {tournament.start_date}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-sm text-gray-500">End Date:</span>
                <span className="text-sm text-gray-900">
                  {tournament.end_date}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-sm text-gray-500">Number of Teams:</span>
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
                <span className="text-sm text-gray-500">Tournament Type:</span>
                <span className="text-sm text-gray-900">
                  {tournament.tournament_type}
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      {renderEmtpyState()}
    </div>
  );
};

export default TournamentPage;
