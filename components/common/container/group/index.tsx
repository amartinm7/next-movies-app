import { Spacer } from "@nextui-org/react";
import React from "react";
import EchTitleContainer from "@/components/common/container/title";
import EchMainContainer from "@/components/common/container/main";
import EchGrid from "@/components/common/grid";
import EchCardMovies from "@/components/movies/cardList";
import EchCardTvShows from "@/components/tvshows/cardList";
import EchCardPeople from "@/components/people/cardList";

interface EchGroupContainerProps {
  title: string;
  children?: React.ReactNode;
}

const EchGroupContainer = ({ title, children }: EchGroupContainerProps) => {
  return (
    <>
      <div className="container-main">
        <EchTitleContainer title={title}></EchTitleContainer>
        <EchMainContainer>
          <EchGrid>{children}</EchGrid>
          <Spacer />
        </EchMainContainer>
      </div>
    </>
  );
};

interface EchGroupContainerItemProps {
  title: string;
  data: Array<object>;
  children?: React.ReactNode;
}

const EchMoviesGroupContainer = ({
  title,
  data,
  children,
}: EchGroupContainerItemProps) => {
  const moviesData = { results: data };
  return (
    <>
      {data?.length > 0 && (
        <EchGroupContainer title={title}>
          <EchCardMovies data={moviesData}></EchCardMovies>
        </EchGroupContainer>
      )}
    </>
  );
};

const EchTvShowsGroupContainer = ({
  title,
  data,
  children,
}: EchGroupContainerItemProps) => {
  const tvShowsData = { results: data };
  return (
    <>
      {data?.length > 0 && (
        <EchGroupContainer title={title}>
          <EchCardTvShows data={tvShowsData}></EchCardTvShows>
        </EchGroupContainer>
      )}
    </>
  );
};

const EchPeopleGroupContainer = ({
  title,
  data,
  children,
}: EchGroupContainerItemProps) => {
  const peopleData = { results: data };
  return (
    <>
      {data?.length > 0 && (
        <EchGroupContainer title={title}>
          <EchCardPeople data={peopleData}></EchCardPeople>
        </EchGroupContainer>
      )}
    </>
  );
};

export default EchGroupContainer;
export {
  EchMoviesGroupContainer,
  EchTvShowsGroupContainer,
  EchPeopleGroupContainer,
};
