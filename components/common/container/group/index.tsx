import { Collapse, Container } from "@nextui-org/react";
import React from "react";
import styles from "./index.module.scss";

interface EchGroupContainerProps {
  children?: React.ReactNode;
}

const EchGroupContainer = ({ children }: EchGroupContainerProps) => {
  return (
    <>
      <Container as="section" className={styles["ech-container-group"]}>
        <Collapse.Group>{children}</Collapse.Group>
      </Container>
    </>
  );
};

export default EchGroupContainer;

interface EchGroupContainerItemProps {
  expanded?: boolean;
  title: string;
  children?: React.ReactNode;
}

const EchGroupContainerItem = ({
  expanded = false,
  title,
  children,
}: EchGroupContainerItemProps) => {
  return (
    <Collapse title={title} expanded={expanded}>
      {children}
    </Collapse>
  );
};

export { EchGroupContainerItem };
