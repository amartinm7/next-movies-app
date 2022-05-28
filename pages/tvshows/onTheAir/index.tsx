import type { NextPage } from "next";
import { Spacer } from "@nextui-org/react";
import { getTvShowsOnTheAir } from "@/pages/api/tvshows/ontheair";
import EchGrid from "@/components/common/grid";
import EchCardTvShows from "@/components/tvshows/cardList/index";
import EchHead from "@/components/common/metaInfo/head";
import { ReactElement } from "react";
import EchMainLayout from "@/components/layouts";
import EchMainContainer from "@/components/common/container/main/index";
import EchTitleContainer from "@/components/common/container/title";

// @ts-ignore
const EchTvShowsOnTheAir: NextPage = ({ data }) => {
  const title = "TvShow On the Air";
  return (
    <>
      <EchHead title={title} description={title} />
      <div className="container">
        <EchTitleContainer title={title}></EchTitleContainer>
        <EchMainContainer>
          <EchGrid>
            <EchCardTvShows data={data}></EchCardTvShows>
            <Spacer />
          </EchGrid>
        </EchMainContainer>
      </div>
    </>
  );
};

// @ts-ignore
EchTvShowsOnTheAir.getLayout = function getLayout(page: ReactElement) {
  return <EchMainLayout>{page}</EchMainLayout>;
};

// @ts-ignore
export const getServerSideProps = async ({ params, query }) => {
  // @ts-ignore
  // https://www.learnbestcoding.com/post/25/nextjs-how-to-use-getServerSideProps
  const onTheAir = await getTvShowsOnTheAir({
    language: query.language,
  });
  return {
    props: {
      data: onTheAir,
    },
  };
};

export default EchTvShowsOnTheAir;
