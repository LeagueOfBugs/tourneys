import { z } from 'zod';

// League Schema
export const TournamentFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  numberOfTeams: z.coerce.number(),
  sport: z.string(),
  tournamentType: z.string(),
});