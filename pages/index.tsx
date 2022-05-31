import type { NextPage } from "next";
import { Spacer } from "@nextui-org/react";
import EchCardMovies from "@/components/movies/cardList/index";
import EchGrid from "@/components/common/grid";
import { getTrending } from "@/pages/api/trending/[...index]";
import EchHead from "@/components/common/metaInfo/head";
import EchMainLayout from "@/components/layouts";
import { ReactElement } from "react";
import EchMainContainer from "@/components/common/container/main/index";
import EchTitleContainer from "@/components/common/container/title/index";
import EchSearcher from "@/components/common/searcher";

// @ts-ignore
const EchHome: NextPage = ({ data }) => {
  const title = "Trending Movies";
  return (
    <>
      <EchHead title={title} description={title} />
      <div className="container-main">
        <EchTitleContainer title={title}>
          <EchSearcher />
        </EchTitleContainer>
        <EchMainContainer>
          <EchGrid>
            <EchCardMovies data={data}></EchCardMovies>
          </EchGrid>
          <Spacer />
        </EchMainContainer>
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
