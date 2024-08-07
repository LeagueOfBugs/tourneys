import deleteTournament from "@/actions/deleteTournament";
import getTournament from "@/actions/getTournament";
import DelBtn from "@/components/DelBtn";
import { Button } from "@/components/ui/button";
import React from "react";

const Tournament = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const tourney = await getTournament(id);
  if (tourney == null) {
    return <p>Nothing here!</p>;
  }
  const {
    name,
    description,
    start_date,
    end_date,
    number_of_teams,
    sport,
    tournament_type,
  } = tourney;
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
      <p>Tournament {id}</p>
      <DelBtn id={id} />
    </div>
  );
};

export default Tournament;
