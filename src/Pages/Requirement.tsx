import * as React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RequirementList from "../components/RequirementList";

const langObj = {
  kz: "Каз",
  ru: "Рус",
  en: "Eng",
};

const MainStyle = styled.main``;

interface IRequirementProps {
  title: string;
}

const Requirement: React.FC<IRequirementProps> = ({ title }): JSX.Element => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <Header />
      <MainStyle>
        <RequirementList />
      </MainStyle>
      <Footer footerLang={langObj} />
    </>
  );
};

export default Requirement;
