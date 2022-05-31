import type { NextPage } from "next";
import { Spacer } from "@nextui-org/react";
import EchHead from "@/components/common/metaInfo/head";
import { ReactElement } from "react";
import EchMainLayout from "@/components/layouts";
import { getPopularPeople } from "@/pages/api/people/popular";
import EchCardPeople from "@/components/people/cardList";
import EchGrid from "@/components/common/grid";
import EchMainContainer from "@/components/common/container/main/index";
import EchTitleContainer from "@/components/common/container/title";
import EchSearcher from "@/components/common/searcher";

// @ts-ignore
const EchPopularPeople: NextPage = ({ data }) => {
  const title = "Popular People";
  return (
    <>
      <EchHead title={title} description={title} />
      <div className="container-main">
        <EchTitleContainer title={title}>
          <EchSearcher />
        </EchTitleContainer>
        <EchMainContainer>
          <EchGrid>
            <EchCardPeople data={data}></EchCardPeople>
            <Spacer />
          </EchGrid>
        </EchMainContainer>
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
