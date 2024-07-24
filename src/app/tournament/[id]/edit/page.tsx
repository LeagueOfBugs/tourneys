import React from "react";

const EditTournament = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>EditTournament {id}</div>;
};

export default EditTournament;
