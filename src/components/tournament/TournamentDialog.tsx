import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TournamentForm from "../forms/TournamentForm";

const TournamentDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>create/edit</DialogTitle>
          <DialogDescription>create or edit your tournament</DialogDescription>
        </DialogHeader>
        <TournamentForm />
      </DialogContent>
    </Dialog>
  );
};

export default TournamentDialog;
