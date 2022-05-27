import type { NextPage } from "next";
import styles from "./index.module.scss";
import { Container, Spacer } from "@nextui-org/react";
import EchGrid from "@/components/common/grid";
import EchHead from "@/components/common/metaInfo/head";
import { ReactElement } from "react";
import EchMainLayout from "@/components/layouts";
import TitleText from "@/components/common/titleText";
import { getPopularPeople } from "@/pages/api/people/popular";
import EchCardPeople from "@/components/people/cardList";

// @ts-ignore
const EchPopularPeople: NextPage = ({ data }) => {
  return (
    <>
      <EchHead title={"Popular People"} description={"Popular People"} />
      <div className={styles.container}>
        <Container as="section">
          <TitleText title={"Popular People"} />
          <Spacer />
        </Container>
        <Container as="section">
          <EchGrid>
            <EchCardPeople data={data}></EchCardPeople>
          </EchGrid>
        </Container>
      </div>
    </>
  );
};

// @ts-ignore
EchPopularPeople.getLayout = function getLayout(page: ReactElement) {
  return <EchMainLayout>{page}</EchMainLayout>;
};

// @ts-ignore
export const getServerSideProps = async ({ params, query }) => {
  // @ts-ignore
  // https://www.learnbestcoding.com/post/25/nextjs-how-to-use-getServerSideProps
  const popularPeople = await getPopularPeople({
    language: query.language,
  });
  return {
    props: {
      data: popularPeople,
    },
  };
};

export default EchPopularPeople;
