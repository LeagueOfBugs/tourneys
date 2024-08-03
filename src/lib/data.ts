import { sql } from '@vercel/postgres';
export async function getTournaments() {
    try {
        const data = await sql`SELECT * FROM tournament;`
        // console.log('data', data.rows);
        return data.rows
    } catch (error) {
        console.log(error)
    }
}