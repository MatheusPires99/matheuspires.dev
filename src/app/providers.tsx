"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type RootProvidersProps = {
  children: ReactNode;
};

export const RootProviders = ({ children }: RootProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
