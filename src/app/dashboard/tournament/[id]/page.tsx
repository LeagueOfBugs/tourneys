import React from "react";

const Tournament = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>Tournament {id}</div>;
};

export default Tournament;
