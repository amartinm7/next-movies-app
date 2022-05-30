import { Grid, Input, useTheme } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import cx from "classnames";
import { useRouter } from "next/router";

const EchSearcher = () => {
  const router = useRouter();
  const [query, setQuery] = useState(false);
  const [showSearcher, setShowSearcher] = useState(false);
  const { isDark, type } = useTheme();
  const echSearcherIconClass = cx("ech-searcher-icon", {
    ["ech-searcher-icon-dark"]: isDark,
  });
  const [keyword, setKeyword] = useState("");

  const handleShowInput = () => {
    setShowSearcher(!showSearcher);
  };

  // @ts-ignore
  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      // @ts-ignore
      await setQuery(true);
    }
  };

  const nextRoute = () => {
    if (!keyword) return;
    // @ts-ignore
    const queryParameters = new URLSearchParams({ keyword }).toString();
    router.push(`/searches/multi?${queryParameters}`);
  };

  useEffect(() => {
    nextRoute();
  }, [query]);

  return (
    <>
      <i className={echSearcherIconClass} onClick={handleShowInput}></i>
      {showSearcher && (
        <Grid.Container gap={4}>
          <Grid>
            <Input
              clearable
              contentRightStyling={false}
              placeholder="Enter actor, movie, tvshow..."
              onKeyDown={handleSearch}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Grid>
        </Grid.Container>
      )}
    </>
  );
};

export default EchSearcher;
