"use client";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

const ThemeProvider = ({ children }) => {
  return (
    <ThemeProvider enableSystem>
      <NextTopLoader />
      {/* <ThemeSwitch /> */}
      {children}
    </ThemeProvider>
  );
};

export default ThemeProvider;
