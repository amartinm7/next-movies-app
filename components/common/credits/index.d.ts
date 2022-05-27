interface PeopleCredit {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

interface PeopleCredits {
  cast: PeopleCredit[];
}

export type { PeopleCredit, PeopleCredits };
