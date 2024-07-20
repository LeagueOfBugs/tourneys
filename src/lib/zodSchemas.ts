import { z } from 'zod';

// League Schema
export const tourneySchema = z.object({
    name: z.string().min(2, {
      message: "League name must be at least 2 characters.",
    }),
  });