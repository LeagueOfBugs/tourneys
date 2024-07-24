import { sql } from '@vercel/postgres';
export async function getTournaments() {
    try {
        const data = await sql`SELECT id, name, description, start_date, end_date, number_of_teams, sport, tournament_type FROM tournament;`
        console.log('data', data.rows);
        return data.rows
    } catch (error) {
        console.log(error)
    }
}