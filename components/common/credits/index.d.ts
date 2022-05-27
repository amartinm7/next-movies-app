interface PeopleCredit {
  id: number;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
  character: string;
  credit_id: string;
}

interface PeopleCredits {
  cast: PeopleCredit[];
}

export type { PeopleCredit, PeopleCredits };
