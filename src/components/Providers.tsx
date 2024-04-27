"use client";
import { theme } from "@/utils/constants";
import React from "react";
import { ThemeProvider } from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
