import { z } from 'zod';

// League Schema
export const TournamentformSchema = z.object({
  name: z.string(),
  description: z.string(),
  startDate: z.coerce.date().min(new Date()),
  endDate: z.coerce.date().min(new Date()),
  numberOfTeams: z.coerce.number(),
  sport: z.string(),
  tournamentType: z.string(),
});