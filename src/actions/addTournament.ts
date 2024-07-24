'use server';
import { TournamentFormSchema } from '@/lib/zodSchemas';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


interface AddTournamentResult{
    data: typeof TournamentFormSchema;
    error: string
}
async function addTournament(formData: FormData){
  // Convert FormData to an object
  const tourneyObject = {
    name: formData.get('name') as string,
    description: formData.get('description') as string,
    startDate: formData.get('startDate') as string,
    endDate: formData.get('endDate') as string,
    numberOfTeams: formData.get('numberOfTeams') as string,
    sport: formData.get('sport') as string,
    tournamentType: formData.get('tournamentType') as string || '',
  }

const result = TournamentFormSchema.safeParse(tourneyObject);

  try {
    const insertResult = await sql`
      INSERT INTO tournament (name, description, start_date, end_date, number_of_teams, sport, tournament_type)
      VALUES (${tourneyObject.name}, ${tourneyObject.description}, ${tourneyObject.startDate}, ${tourneyObject.endDate}, ${tourneyObject.numberOfTeams}, ${tourneyObject.sport}, ${tourneyObject.tournamentType}) RETURNING *;
    `;
revalidatePath('/tournament');
    return {
      data: insertResult,
      error: '',
    };
  } catch (error) {
    return {
      data: null,
      error: 'Error inserting data',
    };
  } finally {
    redirect('/tournament');
}
}

export default addTournament