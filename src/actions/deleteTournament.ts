'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

async function deleteTournament(tournamentId: string){
  try {
    await sql`
      DELETE FROM tournament WHERE id = ${tournamentId} RETURNING *;
    `;
    revalidatePath('/tournament')
  } catch (error) {
    console.log(error)
  }
}
export default deleteTournament;
