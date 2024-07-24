import { sql } from '@vercel/postgres';
export async function getTournaments() {
    try {
        const data = await sql`SELECT * FROM tournaments`;
        console.log('data', data)
        return data.rows
    } catch (error) {
        console.log(error)
    }
}