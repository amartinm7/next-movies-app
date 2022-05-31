import type { NextPage } from "next";
import { Spacer, Text } from "@nextui-org/react";
import { EchCardMovie } from "@/components/movies/cardList/index";
import { getMovieDetails } from "@/pages/api/movies/[id]";
import EchCardCredits from "@/components/common/credits/index";
import EchHead from "@/components/common/metaInfo/head";
import { ReactElement } from "react";
import EchMainLayout from "@/components/layouts";
import EchMainContainer from "@/components/common/container/main/index";
import EchTitleContainer from "@/components/common/container/title";
import EchSearcher from "@/components/common/searcher";

// @ts-ignore
const EchMovieDetails: NextPage = ({ data }) => {
  return (
    <>
      <EchHead title={data.title} description={data.title} />
      <div className="container-main">
        <EchTitleContainer title={data.title} tagline={data.tagline}>
          <EchSearcher />
        </EchTitleContainer>
        <EchMainContainer>
          <section className="section-flex-item">
            <EchCardMovie {...data}></EchCardMovie>
          </section>
          {data.overview && (
            <>
              <section className="section-flex-item">
                <Text h5>{`"Overview"`}</Text>
                <Text h6>{data.overview}</Text>
              </section>
            </>
          )}
          {data.credits?.cast?.length > 0 && (
            <section className="section-flex-item">
              <EchCardCredits
                credits={data.credits}
                contextPath="people"
                labelColumn="ACTORS"
              />
            </section>
          )}
        </EchMainContainer>
        <Spacer />
      </div>
    </>
  );
};

// @ts-ignore
EchMovieDetails.getLayout = function getLayout(page: ReactElement) {
  return <EchMainLayout>{page}</EchMainLayout>;
};

// @ts-ignore
export const getServerSideProps = async ({ params, query }) => {
  // @ts-ignore
  // https://www.learnbestcoding.com/post/25/nextjs-how-to-use-getServerSideProps
  const movieDetails = await getMovieDetails({
    id: query.index,
    language: query.language,
  });
  return {
    props: {
      data: movieDetails,
    },
  };
};

export default EchMovieDetails;
