// @ts-ignore
import EchCard from "./card";
import { MovieVideos } from "./index.d";

interface EchCardMovieProps {
  id: string;
  poster_path: string;
  title: string;
  release_date: string;
  videos: MovieVideos;
}

const EchCardMovie = ({
  poster_path,
  title,
  release_date,
  id,
  videos,
}: EchCardMovieProps) => {
  return (
    <EchCard
      key={id}
      id={id}
      imageSrc={`https://image.tmdb.org/t/p/w500${poster_path}`}
      title={title}
      year={release_date}
      videos={videos}
    />
  );
};

// @ts-ignore
const EchCardMovies = ({ data }) =>
  // @ts-ignore
  data?.results?.map((item, index) => <EchCardMovie key={index} {...item} />);

export { EchCardMovie };
export default EchCardMovies;
