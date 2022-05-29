// @ts-ignore
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import EchCard from "@/components/common/card/index";
import { MovieVideos } from "@/components/common/card/index.d";

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
    <NextLink href={`/movies/${id}`}>
      <Link color="secondary">
        <EchCard
          key={id}
          id={id}
          imageSrc={
            poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`
          }
          title={title}
          year={release_date}
          videos={videos}
        />
      </Link>
    </NextLink>
  );
};

// @ts-ignore
const EchCardMovies = ({ data }) =>
  // @ts-ignore
  data?.results?.map((item, index) => <EchCardMovie key={index} {...item} />);

export { EchCardMovie };
export default EchCardMovies;
