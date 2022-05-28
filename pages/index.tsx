import type { NextPage } from "next";
import { Container, Spacer } from "@nextui-org/react";
import EchCardMovies from "@/components/movies/cardList/index";
import EchGrid from "@/components/common/grid";
import { getTrending } from "@/pages/api/trending/[...index]";
import EchHead from "@/components/common/metaInfo/head";
import EchMainLayout from "@/components/layouts";
import { ReactElement } from "react";
import TitleText from "@/components/common/titleText";

// @ts-ignore
const EchHome: NextPage = ({ data }) => {
  return (
    <>
      <EchHead title={"Trending Movies"} description={"Trending Movies"} />
      <div>
        <Container as="section">
          <TitleText title={"Trending Movies"} />
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
            <EchCardMovies data={data}></EchCardMovies>
          </EchGrid>
          <Spacer />
        </Container>
      </div>
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
  const trendingMovies = await getTrending({
    resource: "movies",
    period: "week",
    language: "es-ES",
  });
  return {
    props: {
      data: trendingMovies,
    },
  };
};

export default EchHome;
