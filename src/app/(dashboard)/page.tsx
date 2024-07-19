import EmptyState from "@/components/tournament/EmptyState";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <main className="flex-1 p-6">
      <EmptyState />
    </main>
  );
};

export default Dashboard;
