import { db } from '@vercel/postgres';
import data from '@/constants/data.json'
import { redirect } from 'next/navigation';

const dropTable = async () => {
  const client = await db.connect();
  try {
    await client.sql`DROP TABLE IF EXISTS tournament, tournaments, teams;`;
  } catch (error) {
    console.error('Error inserting seed data:', error);
  } finally {
    client.release();
  }
};

// Run the seed function
dropTable();


export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });

}
