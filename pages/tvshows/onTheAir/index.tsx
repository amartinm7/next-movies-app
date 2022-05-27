import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.scss";
import { Container, Link, Spacer, Text } from "@nextui-org/react";
import NextLink from "next/link";
import EchTheme from "@/components/common/themes/index";
import { getTvShowsOnTheAir } from "@/pages/api/tvshows/ontheair";
import EchGrid from "@/components/common/grid";
import EchCardTvShows from "@/components/tvshows/cardList/index";

// @ts-ignore
const TvShowsAiringToday: NextPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Estrenos Cine Hoy: On the Air TvShows</title>
        <meta
          name="description"
          content="Generated by create next app and using NextUI as a react UI library"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacer />
      <Container
        as="main"
        display={"flex"}
        alignContent={"space-between"}
        justify={"space-between"}
      >
        <NextLink href={`/`}>
          <Link color="secondary">
            <Text h2>Estrenos Cine Hoy</Text>
          </Link>
        </NextLink>
        <EchTheme />
      </Container>
      <Spacer />
      <Container as="section">
        <Text h1>On the Air TvShows</Text>
        <Spacer />
      </Container>
      <Container as="section">
        <EchGrid>
          <EchCardTvShows data={data}></EchCardTvShows>
        </EchGrid>
      </Container>
    </div>
  );
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

export default TvShowsAiringToday;
