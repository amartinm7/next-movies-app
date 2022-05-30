import { Container, Spacer, Text } from "@nextui-org/react";
import React from "react";
import TitleText from "@/components/common/titleText";

interface EchTitleContainerProps {
  title: string;
  tagline?: string;
  children?: React.ReactNode;
}

const EchTitleContainer = ({
  title,
  tagline,
  children,
}: EchTitleContainerProps) => {
  return (
    <Container as="section">
      <TitleText title={title} />
      <Text h5>{tagline && `"${tagline}"`}</Text>
      {children}
      <Spacer />
    </Container>
  );
};

export default EchTitleContainer;
