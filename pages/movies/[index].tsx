import type { NextPage } from "next";
import styles from "./[index].module.scss";
import { Container, Spacer, Text } from "@nextui-org/react";
import { EchCardMovie } from "@/components/movies/cardList/index";
import { getMovieDetails } from "@/pages/api/movies/[id]";
import EchCardCredits from "@/components/common/credits/index";
import EchHead from "@/components/common/metaInfo/head";
import { ReactElement } from "react";
import EchMainLayout from "@/components/layouts";
import TitleText from "@/components/common/titleText";

// @ts-ignore
const EchMovieDetails: NextPage = ({ data }) => {
  return (
    <>
      <EchHead title={data.title} description={data.title} />
      <div className={styles.container}>
        <Container as="section">
          <TitleText title={data.title} />
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
            <EchCardMovie {...data}></EchCardMovie>
          </section>
          <Spacer />
          <section className={styles["section-overview"]}>
            <Text h5>{`"Overview"`}</Text>
            <Text h6>{data.overview}</Text>
          </section>
          <Spacer />
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
