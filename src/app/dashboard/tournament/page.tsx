import { getTournaments } from "@/lib/data";
import React from "react";

const TournamentPage = async () => {
  const tournaments = await getTournaments();
  console.log(tournaments);
  return <div>TournamentPage</div>;
};

export default TournamentPage;
