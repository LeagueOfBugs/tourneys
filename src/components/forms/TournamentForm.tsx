"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { TournamentformSchema } from "@/lib/zodSchemas";
import { Button } from "../ui/button";

type FormValues = z.infer<typeof TournamentformSchema>;

const TournamentForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(TournamentformSchema),
    defaultValues: {
      name: "",
      description: "",
      startDate: new Date().toISOString().split("T")[0],
      endDate: new Date().toISOString().split("T")[0],
      numberOfTeams: 0,
      sport: "",
      tournamentType: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log("Form Submitted:", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tournament Name</FormLabel>
              <FormControl>
                <Input placeholder="World Cup 2022" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfTeams"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Teams</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Number of Teams" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sport"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sport</FormLabel>
              <FormControl>
                <Input placeholder="Sport" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tournamentType"
          render={() => (
            <FormItem>
              <FormLabel>Tournament Format</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="tournamentType"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Tournament Format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Single Elimination">
                          Single Elimination
                        </SelectItem>
                        <SelectItem value="Double Elimination">
                          Double Elimination
                        </SelectItem>
                        <SelectItem value="Round Robin">Round Robin</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create tournament</Button>
      </form>
    </Form>
  );
};

export default TournamentForm;
