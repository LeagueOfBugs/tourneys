import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Details = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tournament Details</CardTitle>
        <CardDescription>Details</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>[Card Footer]</p>
        <Link href="/edit">to edit</Link>
        {/* <Button>Something</Button> */}
      </CardFooter>
    </Card>
  );
};

export default Details;
