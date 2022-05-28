interface PeopleCredit {
  id: number;
  name: string;
  profile_path: string;
  character: string;
  title: string;
  poster_path: string;
}

interface PeopleCredits {
  cast: PeopleCredit[];
}

export type { PeopleCredit, PeopleCredits };
