'use server';
import { db, sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
interface DeleteTournamentResult {
  data: any;
  error: string;
}

async function deleteTournament(tournamentId: string): Promise<DeleteTournamentResult> {
  try {

    const deleteResult = await sql`
      DELETE FROM tournaments WHERE id = ${tournamentId} RETURNING *;
    `;

console.log(deleteResult)
revalidatePath('/')
    return {
      data: deleteResult,
      error: '',
    };
  } catch (error) {
    await db.query('ROLLBACK');
    console.error('Database Error:', error);
    return {
      data: null,
      error: 'Error deleting data',
    };
  }
}

export default deleteTournament;
