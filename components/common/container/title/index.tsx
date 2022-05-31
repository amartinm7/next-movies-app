import { Container, Spacer, Text } from "@nextui-org/react";
import React from "react";
import TitleText from "@/components/common/titleText";
import styles from "./index.module.scss";

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
    <>
      <Container as="section" className={styles["ech-container-title"]}>
        <TitleText title={title} />
        {tagline && <Text h5>${tagline}</Text>}
        {children}
      </Container>
      <Spacer />
    </>
  );
};

export default EchTitleContainer;
