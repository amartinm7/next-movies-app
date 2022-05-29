// @ts-ignore
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import EchCard from "@/components/common/card/index";
import { MovieVideos } from "@/components/common/card/index.d";

const defaultMovieVideos: MovieVideos = {
  results: [],
};

interface EchCardPersonProps {
  id: string;
  profile_path: string;
  name: string;
  birthday: string;
}

const EchCardPerson = ({
  profile_path,
  name,
  birthday,
  id,
}: EchCardPersonProps) => {
  return (
    <NextLink href={`/people/${id}`}>
      <Link color="secondary">
        <EchCard
          key={id}
          id={id}
          imageSrc={
            profile_path && `https://image.tmdb.org/t/p/w500${profile_path}`
          }
          title={name}
          year={birthday}
          videos={defaultMovieVideos}
        />
      </Link>
    </NextLink>
  );
};

// @ts-ignore
const EchCardPeople = ({ data }) =>
  // @ts-ignore
  data?.results?.map((item, index) => <EchCardPerson key={index} {...item} />);

export { EchCardPerson };
export default EchCardPeople;
