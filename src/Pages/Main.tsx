import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardList from "../components/CardList";

const MainBlock = styled.main``;

const Main = () => {
  return (
    <>
      <Header />
      <MainBlock>
        <CardList />
      </MainBlock>

      {/* <Footer /> */}
    </>
  );
};

export default Main;
