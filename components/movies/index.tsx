// @ts-ignore
import EchCard from "./card";

interface MovieDef {
  id: string;
  poster_path: string;
  title: string;
  release_date: string;
}

const EchCardMovie = ({ poster_path, title, release_date, id }: MovieDef) => (
  <EchCard
    id={id}
    imageSrc={`https://image.tmdb.org/t/p/w500${poster_path}`}
    title={title}
    year={release_date}
  />
);

// @ts-ignore
const EchCardMovies = ({ data }) =>
  // @ts-ignore
  data?.results?.map((item, index) => <EchCardMovie key={index} {...item} />);

export { EchCardMovie };
export default EchCardMovies;
