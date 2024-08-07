import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
export async function getTournaments() {
    try {
        const data = await sql`SELECT * FROM tournament;`
        // console.log('data', data); 
        revalidatePath('/');
        revalidatePath('/tournament');

        return data.rows
    } catch (error) {
        console.log(error)
    }

}