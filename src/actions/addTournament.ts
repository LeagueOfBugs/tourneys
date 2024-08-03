'use server';
import { TournamentFormSchema } from '@/lib/zodSchemas';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';


interface AddTournamentResult{
    data: typeof TournamentFormSchema;
    error: string
}
async function addTournament(formData: FormData): Promise<AddTournamentResult>{
  // Convert FormData to an object
  const tourneyObject = {
    name: formData.get('name'),
    description: formData.get('description'),
    startDate: formData.get('startDate'),
    endDate: formData.get('endDate'),
    numberOfTeams: formData.get('numberOfTeams'),
    sport: formData.get('sport'),
    tournamentType: formData.get('tournamentType'),
  }

  const {success, data} = TournamentFormSchema.safeParse(tourneyObject);

  try {

    if(!success){
          return {
      data: null,
      error: 'Invalid data',
      };
    }

    const {name, description, startDate, endDate, numberOfTeams, sport, tournamentType} = data;

    const start_date = new Date(startDate).toLocaleString();
    const end_date = new Date(endDate).toLocaleString();
    const insertResult = await sql`
      INSERT INTO tournament (name, description, start_date, end_date, number_of_teams, sport, tournament_type)
      VALUES (${name}, ${description}, ${start_date}, ${end_date}, ${numberOfTeams}, ${sport}, ${tournamentType}) RETURNING *;
    `;


  revalidatePath('/');
    return {
      data: insertResult,
      error: '',
    };
  } catch (error) {

    return {
      data: null,
      error: error,
    };
  } 
//   finally {
//     redirect('/tournament');
// }
}

export default addTournament