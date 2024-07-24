import { z } from 'zod';

// League Schema
export const TournamentFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  numberOfTeams: z.coerce.string(),
  sport: z.string(),
  tournamentType: z.string(),
});