// @ts-ignore
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import EchCard from "@/components/common/card/index";
import { MovieVideos } from "@/components/common/card/index.d";

interface EchCardTvShowProps {
  id: string;
  poster_path: string;
  name: string;
  first_air_date: string;
  videos: MovieVideos;
}

const EchCardTvShow = ({
  poster_path,
  name,
  first_air_date,
  id,
  videos,
}: EchCardTvShowProps) => {
  return (
    <NextLink href={`/tvshows/${id}`}>
      <Link color="secondary">
        <EchCard
          key={id}
          id={id}
          imageSrc={
            poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`
          }
          title={name}
          year={first_air_date}
          videos={videos}
        />
      </Link>
    </NextLink>
  );
};

// @ts-ignore
const EchCardTvShows = ({ data }) =>
  // @ts-ignore
  data?.results?.map((item, index) => <EchCardTvShow key={index} {...item} />);

export { EchCardTvShow };
export default EchCardTvShows;
