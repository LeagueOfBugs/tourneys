import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';


async function getTournament(tourneyId: string) {
  try {
    const tournament = await sql`SELECT id, name, description, start_date, end_date, number_of_teams, sport, tournament_type
      FROM tournament
      WHERE id = ${tourneyId};
    `;

    // need to validate what this is returning
    
    revalidatePath('/tournament')
    return tournament.rows[0];
  } catch (error) {
    console.log(error)
  }
}


export default getTournament