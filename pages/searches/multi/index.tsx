import type { NextPage } from "next";
import { Spacer } from "@nextui-org/react";
import EchCardMovies, {
  EchCardMovie,
} from "@/components/movies/cardList/index";
import EchGrid from "@/components/common/grid";
import { getTrending } from "@/pages/api/trending/[...index]";
import EchHead from "@/components/common/metaInfo/head";
import EchMainLayout from "@/components/layouts";
import { ReactElement } from "react";
import EchMainContainer from "@/components/common/container/main/index";
import EchTitleContainer from "@/components/common/container/title/index";
import EchCardTvShows from "@/components/tvshows/cardList";
import EchCardPeople from "@/components/people/cardList";
import { searchMulti } from "@/pages/api/searches/multi";

// @ts-ignore
const EchHome: NextPage = ({ data }) => {
  const title = "Searches";
  const moviesTitle = "Movies";
  const tvShowsTitle = "TvShows";
  const peopleTitle = "People";
  // @ts-ignore
  const movies = data?.results?.filter((item) => item.media_type === "movie");
  // @ts-ignore
  const tvShows = data?.results?.filter((item) => item.media_type === "tv");
  // @ts-ignore
  const people = data?.results?.filter((item) => item.media_type === "person");
  debugger;
  return (
    <>
      <EchHead title={title} description={title} />
      <div className="container">
        <EchTitleContainer title={moviesTitle}></EchTitleContainer>
        <EchMainContainer>
          <EchGrid>
            <EchCardMovies data={data}></EchCardMovies>
          </EchGrid>
          <Spacer />
        </EchMainContainer>
      </div>
      <div className="container">
        <EchTitleContainer title={tvShowsTitle}></EchTitleContainer>
        <EchMainContainer>
          <EchGrid>
            <EchCardTvShows data={data}></EchCardTvShows>
            <Spacer />
          </EchGrid>
        </EchMainContainer>
      </div>
      <EchTitleContainer title={peopleTitle}></EchTitleContainer>
      <EchMainContainer>
        <EchGrid>
          <EchCardPeople data={data}></EchCardPeople>
          <Spacer />
        </EchGrid>
      </EchMainContainer>
    </>
  );
};

// @ts-ignore
EchHome.getLayout = function getLayout(page: ReactElement) {
  return <EchMainLayout>{page}</EchMainLayout>;
};

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async ({
  // @ts-ignore
  params,
  // @ts-ignore
  query,
}) => {
  const searches = await searchMulti({
    keyword: query.keyword,
    language: query.language,
    page: query.page,
  });
  return {
    props: {
      data: searches,
    },
  };
};

export default EchHome;
