import { Container, Spacer, Text } from "@nextui-org/react";
import React from "react";
import TitleText from "@/components/common/titleText";

interface EchTitleContainerProps {
  title: string;
  tagline?: string;
}

const EchTitleContainer = ({ title, tagline }: EchTitleContainerProps) => {
  return (
    <Container as="section">
      <TitleText title={title} />
      <Text h5>{tagline && `"${tagline}"`}</Text>
      <Spacer />
    </Container>
  );
};

export default EchTitleContainer;
