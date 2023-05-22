import * as React from "react";
import styled from "styled-components";
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

const RequirementList = () => {
  return (
    <>
      <Wrapper>
        <SectionStyle>
          <TitleStyle>Условия сервиса</TitleStyle>
        </SectionStyle>
      </Wrapper>
    </>
  );
};

export default RequirementList;
