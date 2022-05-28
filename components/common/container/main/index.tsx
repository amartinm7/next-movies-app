import { Container, Spacer, Text } from "@nextui-org/react";
import React from "react";

interface EchMainContainerProps {
  children?: React.ReactNode;
}

const EchMainContainer = ({ children }: EchMainContainerProps) => {
  return (
    <Container
      as="section"
      display={"flex"}
      alignContent={"space-between"}
      justify={"space-between"}
      responsive={true}
      css={{ gap: "1.5rem" }}
    >
      {children}
    </Container>
  );
};

export default EchMainContainer;
