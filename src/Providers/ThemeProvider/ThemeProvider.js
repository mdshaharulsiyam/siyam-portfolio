"use client";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

const ThemeProviders = ({ children }) => {
  return (
    <ThemeProvider enableSystem>
      <NextTopLoader />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviders;
