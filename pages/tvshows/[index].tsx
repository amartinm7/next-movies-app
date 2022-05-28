import type { NextPage } from "next";
import { Container, Spacer, Text } from "@nextui-org/react";
import { EchCardTvShow } from "@/components/tvshows/cardList";
import { getTvShowDetails } from "@/pages/api/tvshows/[id]";
import EchHead from "@/components/common/metaInfo/head";
import { ReactElement } from "react";
import EchMainLayout from "@/components/layouts";
import TitleText from "@/components/common/titleText";
import EchCardCredits from "@/components/common/credits/index";

// @ts-ignore
const EchTvShowDetails: NextPage = ({ data }) => {
  return (
    <>
      <EchHead title={data.name} description={data.name} />
      <div className="container">
        <Container as="section">
          <TitleText title={data.name} />
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
            <EchCardTvShow {...data}></EchCardTvShow>
          </section>
          <Spacer />
          {data.overview && (
            <>
              <section className="section-flex-item">
                <Text h5>{`"Overview"`}</Text>
                <Text h6>{data.overview}</Text>
              </section>
              <Spacer />
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
EchTvShowDetails.getLayout = function getLayout(page: ReactElement) {
  return <EchMainLayout>{page}</EchMainLayout>;
};

// @ts-ignore
export const getServerSideProps = async ({ params, query }) => {
  // @ts-ignore
  // https://www.learnbestcoding.com/post/25/nextjs-how-to-use-getServerSideProps
  const tvShowDetails = await getTvShowDetails({
    id: query.index,
    language: query.language,
  });
  return {
    props: {
      data: tvShowDetails,
    },
  };
};

export default EchTvShowDetails;
