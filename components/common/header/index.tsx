import styles from "./index.module.scss";
import { Container, Link, Spacer, Text } from "@nextui-org/react";
import NextLink from "next/link";
import EchTheme from "@/components/common/themes";

// @ts-ignore
const EchHeader = () => {
  return (
    <>
      <Container
        as="header"
        display={"flex"}
        alignContent={"space-between"}
        justify={"space-between"}
      >
        <div className={styles["ech-nav"]}>
          <NextLink href={`/`}>
            <Link color="secondary">
              <Text h2>Estrenos Cine Hoy</Text>
            </Link>
          </NextLink>
          <div className={styles["ech-nav-items"]}>
            <NextLink href={`/`}>
              <Link color="secondary">
                <Text h6>Trending</Text>
              </Link>
            </NextLink>
            <NextLink href={`/tvshows/onTheAir`}>
              <Link color="secondary">
                <Text h6>TvShows On the Air</Text>
              </Link>
            </NextLink>
            <NextLink href={`/people/popular`}>
              <Link color="secondary">
                <Text h6>Popular People</Text>
              </Link>
            </NextLink>
          </div>
        </div>
        <EchTheme />
      </Container>
    </>
  );
};

export default EchHeader;
