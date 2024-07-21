import EmptyState from "@/components/tournament/EmptyState";
import React from "react";
import data from "../../../constants/data.json";

const Dashboard = () => {
  return (
    <main className="flex-1 p-6">
      {data ? <p>{data.tournaments[0].name}</p> : <EmptyState />}
    </main>
  );
};

export default Dashboard;
