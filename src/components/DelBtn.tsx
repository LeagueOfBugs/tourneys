"use client";
import React from "react";
import { Button } from "./ui/button";
import deleteTournament from "@/actions/deleteTournament";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";

const DelBtn = ({ id }: { id: string }) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        deleteTournament(id);
        router.replace("/tournament");
      }}
    >
      DelBtn
    </Button>
  );
};

export default DelBtn;
