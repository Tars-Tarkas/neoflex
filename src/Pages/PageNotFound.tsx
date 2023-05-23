import * as React from "react";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

const langObj = {
  ru: "Рус",
  en: "Eng",
};

const TitleStyle = styled.span`
  display: block;
  font-family: var(--family);
  font-size: 80px;
`;

const TextStyle = styled.span`
  display: block;
  font-family: var(--family);
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const SubTextStyle = styled.p`
  margin: 0;
  padding: 0;
  display: block;
  font-weight: var(--fw-mediun);
`;

const MainBlock = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionStyle = styled.section`
  padding-top: 30px;
  text-align: center;
`;

const PageNotFound = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <MainBlock>
          <SectionStyle>
            <TitleStyle>404</TitleStyle>
            <TextStyle>page not found</TextStyle>
            <SubTextStyle>запрашиваемая страница не найдена</SubTextStyle>
          </SectionStyle>
        </MainBlock>
        <Footer footerLang={langObj} />
      </Wrapper>
    </>
  );
};

export default PageNotFound;
