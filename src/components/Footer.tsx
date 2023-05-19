import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Wrapper from "./Wrapper";

const FooterLogo = styled(NavLink)`
  font-family: var(--family);
  color: #101010;
  font-weight: var(--fw-bold);
  font-size: 25px;
  text-decoration: none;
  padding-right: 57px;
`;

const FooterBlock = styled.footer``;

const FooterContent = styled.div`
  background-color: white;
  padding-top: 32px;
  padding-left: 29px;
  padding-right: 29px;
  padding-bottom: 32px;
  border-radius: var(--radius) var(--radius) 0px 0px;
`;
const FooterNavLink = styled(NavLink)`
  font-family: var(--family);
  color: #000000;
  font-size: 17px;
  font-weight: var(--fw-regular);
  display: block;
  line-height: 31px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-line: underline;
    text-decoration-style: dotted;
    text-decoration-color: #838383;
  }
`;

const FooterLink = styled.a`
  font-family: var(--family);
  color: #000000;
  font-size: 17px;
  font-weight: var(--fw-regular);
  display: block;
  line-height: 31px;
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
  padding-right: 19px;
  font-size: 17px;
`;
const IconVK = styled.i`
  font-size: 30px;
`;
const IconTelegram = styled.i`
  font-size: 30px;
`;
const IconWhatsapp = styled.i`
  font-size: 28px;
`;

const LangBlock = styled.div`
  display: flex;
`;

const SocialLinkBlock = styled.div`
  display: flex;
  gap: 18px;
  padding-left: 8px;
`;

const FooterLangUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
`;
const FooterLangLi = styled.li<React.LiHTMLAttributes<HTMLLIElement>>`
  cursor: pointer;
`;

interface footerProps {
  footerLang?: Object;
}

const Footer = (props: footerProps) => {
  const { footerLang = {} } = props;

  return (
    <Wrapper>
      <FooterBlock>
        <FooterContent>
          <FooterLinkBlock>
            <FooterLogo to="/">QPICK</FooterLogo>
            <FlexBox>
              <FooterNavLink to="/favourites">Избранное</FooterNavLink>
              <FooterNavLink to="/shoplist">Корзина</FooterNavLink>
              <FooterNavLink to="/contacts">Контакты</FooterNavLink>
            </FlexBox>
            <FlexBox>
              <FooterNavLink to="/requirement">Условия сервиса</FooterNavLink>
              <LangBlock>
                <IconLang className="i-language" />{" "}
                <FooterLangUl>
                  {Object.entries(footerLang).map(([key, value]) => (
                    <FooterLangLi key={key} data-id={key}>
                      {value}
                    </FooterLangLi>
                  ))}
                </FooterLangUl>
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
      </FooterBlock>
    </Wrapper>
  );
};

export default Footer;
