import type { NextPage } from "next";
import styles from "./[index].module.scss";
import { Container, Spacer, Text } from "@nextui-org/react";
import EchHead from "@/components/common/metaInfo/head";
import { ReactElement } from "react";
import EchMainLayout from "@/components/layouts";
import TitleText from "@/components/common/titleText";
import { getPeopleDetails } from "@/pages/api/people/[id]";
import { EchCardPerson } from "@/components/people/cardList";

// @ts-ignore
const EchPeopleDetails: NextPage = ({ data }) => {
  return (
    <>
      <EchHead title={data.name} description={data.name} />
      <div className={styles.container}>
        <Container as="section">
          <TitleText title={data.name} />
          {/*<Text h5>{data.tagline && `"${data.tagline}"`}</Text>*/}
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
            <EchCardPerson {...data}></EchCardPerson>
          </section>
          <Spacer />
          {data.biography && (
            <>
              <section className={styles["section-overview"]}>
                <Text h5>{`"Biography"`}</Text>
                <Text h6>{data.biography}</Text>
              </section>
              <Spacer />
            </>
          )}
          <section className={styles["section-credits"]}>
            {/*<EchCardCredits cast={data.credits.cast} />*/}
          </section>
        </Container>
        <Spacer />
      </div>
    </>
  );
};

// @ts-ignore
EchPeopleDetails.getLayout = function getLayout(page: ReactElement) {
  return <EchMainLayout>{page}</EchMainLayout>;
};

// @ts-ignore
export const getServerSideProps = async ({ params, query }) => {
  // @ts-ignore
  // https://www.learnbestcoding.com/post/25/nextjs-how-to-use-getServerSideProps
  const peopleDetails = await getPeopleDetails({
    id: query.index,
    language: query.language,
  });
  return {
    props: {
      data: peopleDetails,
    },
  };
};

export default EchPeopleDetails;
