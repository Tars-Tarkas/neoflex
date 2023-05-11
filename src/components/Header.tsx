import React from "react";
import styled from "styled-components";

const HeaderLogo = styled.span`
  font-family: var(--family);
  color: #101010;
  font-weight: var(--fw-bold);
  font-size: 25px;
`;

const Wrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  width: 100%;
`;

const HeaderBlock = styled.header`
  padding-top: 15px;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <HeaderLogo>QPICK</HeaderLogo>
        </Wrapper>
      </HeaderBlock>
    </>
  );
};

export default Header;
