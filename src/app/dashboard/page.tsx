import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <main className="flex-1 p-6">
      <div className="border border-dashed rounded-lg flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-2xl font-bold">No Tournaments Yet</h2>
          <p className="text-muted-foreground">
            Get started by creating a new tournament.
          </p>
          <Button className="mt-4">
            <PlusIcon className="h-4 w-4 mr-2" />
            Create Tournament
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
