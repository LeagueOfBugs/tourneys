import React from "react";

type MainContainerProps = {
  children: React.ReactNode;
  details: React.ReactNode;
  schedule: React.ReactNode;
};
const MainContainer = ({ details, schedule, children }: MainContainerProps) => {
  const tournaments = [];
  const isTournamentEmpty = tournaments.length > 0;

  return (
    <div>
      {isTournamentEmpty ? (
        <div>
          hi
          {details}
          {schedule}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default MainContainer;
