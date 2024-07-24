"use client";

import deleteTournament from "@/actions/deleteTournament";
import { Button } from "@/components/ui/button";
import React from "react";

const Tournament = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      Tournament {id}
      <Button onClick={() => deleteTournament(id)}>Delete</Button>
    </div>
  );
};

export default Tournament;
