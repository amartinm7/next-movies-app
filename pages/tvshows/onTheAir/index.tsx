import type { NextPage } from "next";
import { Container, Spacer } from "@nextui-org/react";
import { getTvShowsOnTheAir } from "@/pages/api/tvshows/ontheair";
import EchGrid from "@/components/common/grid";
import EchCardTvShows from "@/components/tvshows/cardList/index";
import EchHead from "@/components/common/metaInfo/head";
import { ReactElement } from "react";
import EchMainLayout from "@/components/layouts";
import TitleText from "@/components/common/titleText";

// @ts-ignore
const EchTvShowsOnTheAir: NextPage = ({ data }) => {
  return (
    <>
      <EchHead title={"TvShow On the Air"} description={"TvShow On the Air"} />
      <div className="container">
        <Container as="section">
          <TitleText title={"TvShow On the Air"} />
          <Spacer />
        </Container>
        <Container
          as="section"
          display={"flex"}
          alignContent={"space-between"}
          justify={"space-between"}
          responsive={true}
          css={{ gap: "1.5rem" }}
        >
          <EchGrid>
            <EchCardTvShows data={data}></EchCardTvShows>
            <Spacer />
          </EchGrid>
        </Container>
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
