'use server';
import { TournamentFormSchema } from '@/lib/zodSchemas';
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';


async function addTournament(formData: FormData){
  // Convert FormData to an object
  const tourneyObject = {
    name: formData.get('name'),
    description: formData.get('description'),
    startDate: formData.get('startDate'),
    endDate: formData.get('endDate'),
    numberOfTeams: formData.get('numberOfTeams'),
    sport: formData.get('sport'),
    tournamentType: formData.get('tournamentType'),
  }

  const {success, data} = TournamentFormSchema.safeParse(tourneyObject);

  try {
    if(!success){
      throw new ErrorEvent('invalid cred')
    }

    const {name, description, startDate, endDate, numberOfTeams, sport, tournamentType} = data;

    const start_date = new Date(startDate).toLocaleString();
    const end_date = new Date(endDate).toLocaleString();
    await sql`
      INSERT INTO tournament (name, description, start_date, end_date, number_of_teams, sport, tournament_type)
      VALUES (${name}, ${description}, ${start_date}, ${end_date}, ${numberOfTeams}, ${sport}, ${tournamentType});
    `;

  } catch (error) {
    console.log(error)
  } 
    redirect('/tournament')
}

export default addTournament