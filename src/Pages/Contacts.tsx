import * as React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const langObj = {
  kz: "Каз",
  ru: "Рус",
  en: "Eng",
};
const MainStyle = styled.main``;
const Contacts = () => {
  return (
    <>
      <Header />
      <MainStyle></MainStyle>
      <Footer footerLang={langObj} />
    </>
  );
};

export default Contacts;
