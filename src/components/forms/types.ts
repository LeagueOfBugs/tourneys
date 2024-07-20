export type TournamentFormData = {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  numberOfTeams: number;  
    sport: string; 
   tournamentType: string;
};

  export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
  };

  export type ValidFieldNames =
  | "id"
  | "name"
  | "description"
  | "startDate"
  | "endDate"
  | "numberOfTeams"
  | "sport"
  | "tournamentType";

