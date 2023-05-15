import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";

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
const FooterLink = styled.a.attrs({
  href: "#",
})`
  font-family: var(--family);
  color: #000000;
  font-size: 17px;
  font-weight: var(--fw-regular);
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
`;

const FooterLinkBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconLang = styled.i`
  padding-right: 15px;
`;
const IconVK = styled.i`
  font-size: 40px;
`;
const IconTelegram = styled.i`
  font-size: 40px;
`;
const IconWhatsapp = styled.i`
  font-size: 40px;
`;

const LangBlock = styled.div``;

const LangLink = styled.a`
  font-weight: var(--fw-mediun);
  font-size: 15px;
  padding-right: 14px;
`;

const SocialLinkBlock = styled.div`
  display: flex;
  gap: 18px;
`;

const Footer = () => {
  return (
    <>
      <FooterBlock>
        <Wrapper>
          <FooterContent>
            <FooterLinkBlock>
              <FooterLogo>QPICK</FooterLogo>
              <FlexBox>
                <FooterLink>Избранное</FooterLink>
                <FooterLink>Корзина</FooterLink>
                <FooterLink>Контакты</FooterLink>
              </FlexBox>
              <FlexBox>
                <FooterLink>Условия сервиса</FooterLink>
                <LangBlock>
                  <IconLang className="i-language" />
                  <LangLink>Рус</LangLink>
                  <LangLink>Eng</LangLink>
                </LangBlock>
              </FlexBox>
              <SocialLinkBlock>
                <FooterLink>
                  <IconVK className="i-VK" />
                </FooterLink>
                <FooterLink>
                  <IconTelegram className="i-Telegram" />
                </FooterLink>
                <FooterLink>
                  <IconWhatsapp className="i-Whatsapp" />
                </FooterLink>
              </SocialLinkBlock>
            </FooterLinkBlock>
          </FooterContent>
        </Wrapper>
      </FooterBlock>
    </>
  );
};

export default Footer;
