import * as React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Wrapper from "./Wrapper";

const SectionStyle = styled.section`
  padding-top: 30px;
`;

const TitleStyle = styled.h2`
  font-family: var(--family);
  color: #838383;
  font-size: 20px;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

const ContactsList = () => {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <SectionStyle>
          <TitleStyle>{t("сontacts")}</TitleStyle>
        </SectionStyle>
      </Wrapper>
    </>
  );
};

export default ContactsList;
