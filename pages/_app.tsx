import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import React, { createContext, useState } from "react";
import type { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const EchLanguageContext = createContext({});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const [languageSelected, setLanguageSelected] = useState("en-EN");
  const values = {
    languageSelected,
    setLanguageSelected,
  };

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <EchLanguageContext.Provider value={values}>
      {getLayout(<Component {...pageProps} />)}
    </EchLanguageContext.Provider>
  );
}
