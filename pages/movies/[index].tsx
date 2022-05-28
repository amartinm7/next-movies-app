import type { NextPage } from "next";
import { Container, Spacer, Text } from "@nextui-org/react";
import { EchCardMovie } from "@/components/movies/cardList/index";
import { getMovieDetails } from "@/pages/api/movies/[id]";
import EchCardCredits from "@/components/common/credits/index";
import EchHead from "@/components/common/metaInfo/head";
import { ReactElement } from "react";
import EchMainLayout from "@/components/layouts";
import TitleText from "@/components/common/titleText";
import EchGrid from "@/components/common/grid";

// @ts-ignore
const EchMovieDetails: NextPage = ({ data }) => {
  return (
    <>
      <EchHead title={data.title} description={data.title} />
      <div className="container">
        <Container as="section">
          <TitleText title={data.title} />
          <Text h5>{data.tagline && `"${data.tagline}"`}</Text>
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
          {data.credits && (
            <section className="section-flex-item">
              <EchCardCredits
                credits={data.credits}
                contextPath="people"
                labelColumn="ACTORS"
              />
            </section>
          )}
        </Container>
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
