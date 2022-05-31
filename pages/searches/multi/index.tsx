import type { NextPage } from "next";
import { Spacer } from "@nextui-org/react";
import EchCardMovies from "@/components/movies/cardList/index";
import EchGrid from "@/components/common/grid";
import EchHead from "@/components/common/metaInfo/head";
import EchMainLayout from "@/components/layouts";
import { ReactElement } from "react";
import EchMainContainer from "@/components/common/container/main/index";
import EchTitleContainer from "@/components/common/container/title/index";
import EchCardTvShows from "@/components/tvshows/cardList";
import EchCardPeople from "@/components/people/cardList";
import { searchMulti } from "@/pages/api/searches/multi";
import EchSearcher from "@/components/common/searcher";
import EchGroupContainer, {
  EchGroupContainerItem,
} from "@/components/common/container/group";

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
      <div className="container-main">
        <EchTitleContainer title={title}>
          <EchSearcher />
        </EchTitleContainer>
        <EchGroupContainer>
          <EchGroupContainerItem title={moviesTitle} expanded={true}>
            <EchMainContainer>
              <EchGrid>
                <EchCardMovies data={data}></EchCardMovies>
              </EchGrid>
              <Spacer />
            </EchMainContainer>
          </EchGroupContainerItem>
          <EchGroupContainerItem title={tvShowsTitle}>
            <EchMainContainer>
              <EchGrid>
                <EchCardTvShows data={data}></EchCardTvShows>
              </EchGrid>
              <Spacer />
            </EchMainContainer>
          </EchGroupContainerItem>
          <EchGroupContainerItem title={peopleTitle}>
            <EchMainContainer>
              <EchGrid>
                <EchCardPeople data={data}></EchCardPeople>
              </EchGrid>
              <Spacer />
            </EchMainContainer>
          </EchGroupContainerItem>
        </EchGroupContainer>
      </div>
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
