import type { NextPage } from "next";
import styles from "./[index].module.scss";
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
      <div className={styles.container}>
        <Container as="section">
          <TitleText title={data.name} />
          <Text h5>{data.tagline && `"${data.tagline}"`}</Text>
          <Spacer />
        </Container>
        <Container
          as="section"
          display={"flex"}
          alignContent={"space-between"}
          justify={"space-evenly"}
          responsive={true}
        >
          <section className={styles["section-overview"]}>
            <EchCardTvShow {...data}></EchCardTvShow>
          </section>
          <Spacer />
          {data.overview && (
            <>
              <section className={styles["section-overview"]}>
                <Text h5>{`"Overview"`}</Text>
                <Text h6>{data.overview}</Text>
              </section>
              <Spacer />
            </>
          )}
          <section className={styles["section-credits"]}>
            <EchCardCredits cast={data.credits.cast} />
          </section>
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
