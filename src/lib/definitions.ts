export type Tournament = {
  id?: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  numberOfTeams: number;  
  sport: string; 
  tournamentType: string;
}

export type Team = {
  id: string;
  name: string;
  tournamentId: string;
}