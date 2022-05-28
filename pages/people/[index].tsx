import type { NextPage } from "next";
import { Spacer, Text } from "@nextui-org/react";
import EchHead from "@/components/common/metaInfo/head";
import { EchCardPerson } from "@/components/people/cardList";
import EchCardCredits from "@/components/common/credits";
import EchMainLayout from "@/components/layouts";
import { getPeopleDetails } from "@/pages/api/people/[id]";
import EchMainContainer from "@/components/common/container/main/index";
import EchTitleContainer from "@/components/common/container/title";

// @ts-ignore
const EchPeopleDetails: NextPage = ({ data }) => {
  return (
    <>
      <EchHead title={data.name} description={data.name} />
      <div className="container">
        <EchTitleContainer title={data.name}></EchTitleContainer>
        <EchMainContainer>
          <section className="section-flex-item">
            <EchCardPerson {...data}></EchCardPerson>
          </section>
          {data.biography && (
            <>
              <section className="section-flex-item">
                <Text h5>{`"Biography"`}</Text>
                <Text h6>{data.biography}</Text>
              </section>
            </>
          )}
          {data.movie_credits && (
            <>
              <section className="section-flex-item">
                <EchCardCredits
                  credits={data.movie_credits}
                  contextPath="movies"
                  labelColumn="MOVIES"
                />
              </section>
            </>
          )}
          {data.tv_credits && (
            <>
              <section className="section-flex-item">
                <EchCardCredits
                  credits={data.tv_credits}
                  contextPath="tvshows"
                  labelColumn="TVSHOWS"
                />
              </section>
            </>
          )}
        </EchMainContainer>
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
