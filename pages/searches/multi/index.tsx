import type { NextPage } from "next";
import EchHead from "@/components/common/metaInfo/head";
import EchTitleContainer from "@/components/common/container/title/index";
import EchSearcher from "@/components/common/searcher";
import {
  EchMoviesGroupContainer,
  EchPeopleGroupContainer,
  EchTvShowsGroupContainer,
} from "@/components/common/container/group";
import EchMainLayout from "@/components/layouts";
import { searchMulti } from "@/pages/api/searches/multi";

// @ts-ignore
const EchSearchMulti: NextPage = ({ data }) => {
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
  return (
    <>
      <EchHead title={title} description={title} />
      <EchTitleContainer title={title}>
        <EchSearcher />
      </EchTitleContainer>
      <EchMoviesGroupContainer
        title={moviesTitle}
        data={movies}
      ></EchMoviesGroupContainer>
      <EchTvShowsGroupContainer
        title={tvShowsTitle}
        data={tvShows}
      ></EchTvShowsGroupContainer>
      <EchPeopleGroupContainer
        title={peopleTitle}
        data={people}
      ></EchPeopleGroupContainer>
    </>
  );
};

// @ts-ignore
EchSearchMulti.getLayout = function getLayout(page: ReactElement) {
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

export default EchSearchMulti;
