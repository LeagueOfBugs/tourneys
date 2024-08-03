import deleteTournament from "@/actions/deleteTournament";
import getTournament from "@/actions/getTournament";
import { Button } from "@/components/ui/button";
import React from "react";
import { start } from "repl";

const Tournament = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const {
    name,
    description,
    start_date,
    end_date,
    number_of_teams,
    sport,
    tournament_type,
  } = await getTournament(id);
  const startDate = new Date(start_date);
  const localizedStartDate = startDate.toLocaleDateString();
  const endDate = new Date(end_date);
  const localizedEndDate = endDate.toLocaleDateString();
  return (
    <div>
      <p>name: {name}</p>
      <p>description: {description}</p>
      <p>start_date: {localizedStartDate}</p>
      <p>end_date: {localizedEndDate}</p>
      <p>number_of_teams: {number_of_teams}</p>
      <p>sport: {sport}</p>
      <p>tournament_type: {tournament_type}</p>
      {/* <Button onClick={() => deleteTournament(id)}>Delete</Button> */}
      <p>Tournament {id}</p>
    </div>
  );
};

export default Tournament;
