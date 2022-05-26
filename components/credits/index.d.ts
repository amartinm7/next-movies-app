interface MovieCredit {
    id: number;
    known_for_department: string;
    name: string
    popularity: number
    profile_path: string
    character: string
    credit_id: string
}

interface MovieCredits {
    cast: MovieCredit[]
}

export type { MovieCredits, MovieCredit };
