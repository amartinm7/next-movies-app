import styles from "./index.module.scss";
import { Container, Link, Text } from "@nextui-org/react";
import NextLink from "next/link";
import EchTheme from "@/components/common/themes";
import EchLanguage from "@/components/common/language";
import EchSearcher from "@/components/common/searcher";

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
                <Text h6>Movies</Text>
              </Link>
            </NextLink>
            <NextLink href={`/tvshows/onTheAir`}>
              <Link color="secondary">
                <Text h6>TvShows</Text>
              </Link>
            </NextLink>
            <NextLink href={`/people/popular`}>
              <Link color="secondary">
                <Text h6>People</Text>
              </Link>
            </NextLink>
          </div>
        </div>
        {/*<EchSearcher />*/}
        <EchLanguage />
        <EchTheme />
      </Container>
    </>
  );
};

export default EchHeader;
