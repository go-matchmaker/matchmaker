"use client";
import withMenuWrapper from "@/components/hoc/withMenuWrapper";
import TopBar from "@/components/menus/TopBar";
import styled from "styled-components";

const Main = styled.main``;

const Home = () => {
  return <Main></Main>;
};

export default withMenuWrapper(Home, "home");
