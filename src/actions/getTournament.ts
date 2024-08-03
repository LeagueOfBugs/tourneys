import { sql } from '@vercel/postgres';


async function getTournament(tourneyId: string) {
    const tournament = await sql`SELECT id, name, description, start_date, end_date, number_of_teams, sport, tournament_type
      FROM tournament
      WHERE id = ${tourneyId};
    `;

    return tournament.rows[0];

}


export default getTournament