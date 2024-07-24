import { db } from '@vercel/postgres';
import data from '@/constants/data.json'
import { redirect } from 'next/navigation';

const seedTournaments = async () => {
  const client = await db.connect();
  const {tournaments} = data;
  console.log('Seeding data...', tournaments);
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`
      CREATE TABLE IF NOT EXISTS tournament (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        number_of_teams INT NOT NULL,
        sport TEXT NOT NULL,
        tournament_type TEXT NOT NULL
      );
    `;
    await client.sql`
      CREATE TABLE IF NOT EXISTS teams (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
      );
    `;
    await client.sql`
      CREATE TABLE IF NOT EXISTS tournament_teams (
        tournament_id UUID REFERENCES tournament(id) ON DELETE CASCADE,
        team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
        PRIMARY KEY (tournament_id, team_id)
      );
    `;
    // Insert seed data
    await Promise.all(
      tournaments.map((tournament) =>
        client.sql`
          INSERT INTO tournaments (name, description, start_date, end_date, number_of_teams, sport, tournament_type)
          VALUES (${tournament.name}, ${tournament.description}, ${tournament.startDate}, ${tournament.endDate}, ${tournament.numberOfTeams}, ${tournament.sport}, ${tournament.tournamentType})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );
    redirect('/dashboard');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  } finally {
    client.release();
  }
};

// Run the seed function
seedTournaments();


export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });

}
