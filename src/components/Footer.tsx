import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  width: 100%;
`;

const FooterLogo = styled.span`
  font-family: var(--family);
  color: #101010;
  font-weight: var(--fw-bold);
  font-size: 25px;
`;

const FooterBlock = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const FooterContent = styled.div`
  background-color: white;
  padding-top: 29px;
  padding-left: 29px;
  padding-right: 29px;
  padding-bottom: 32px;
  border-radius: var(--radius) var(--radius) 0px 0px;
`;
const FooterLink = styled.a`
  font-family: var(--family);
  color: #000000;
  font-size: 17px;
  font-weight: var(--fw-regular);
`;

const Footer = () => {
  return (
    <>
      <FooterBlock>
        <Wrapper>
          <FooterContent>
            <FooterLogo>QPICK</FooterLogo>
            <FooterLink>Избранное</FooterLink>
            <FooterLink>Корзина</FooterLink>
            <FooterLink>Контакты</FooterLink>
          </FooterContent>
        </Wrapper>
      </FooterBlock>
    </>
  );
};

export default Footer;
