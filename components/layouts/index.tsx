import EchHeader from "@/components/common/header";
import EchFooter from "@/components/common/footer";
import { createTheme, NextUIProvider, Spacer } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

interface EchMainLayoutProps {
  children?: React.ReactNode;
}

const EchMainLayout = ({ children }: EchMainLayoutProps) => {
  return (
    <>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <div className="container">
            <EchHeader />
            <Spacer />
            <main>{children}</main>
            <EchFooter />
          </div>
        </NextUIProvider>
      </NextThemesProvider>
    </>
  );
};

export default EchMainLayout;
