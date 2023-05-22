import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Wrapper from "./Wrapper";

const FooterLogo = styled(NavLink)`
  font-family: var(--family);
  color: #101010;
  font-weight: var(--fw-bold);
  font-size: 25px;
  text-decoration: none;
`;

const FooterBlock = styled.footer``;

const FooterContent = styled.div`
  background-color: white;
  padding-top: 32px;
  padding-left: 29px;
  padding-right: 29px;
  padding-bottom: 32px;
  border-radius: var(--radius) var(--radius) 0px 0px;
  display: grid;
  grid-template-columns: 317px 277px repeat(1, 1fr);
  grid-template-rows: 82px;
  height: 100%;
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

const FooterLink = styled.a.attrs({
  href: "#",
})`
  font-family: var(--family);
  color: #000000;
  font-size: 17px;
  font-weight: var(--fw-regular);
  display: block;
  line-height: 31px;
  text-decoration: none;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  justify-content: flex-end;
  grid-area: 1 / 4 / 2 / 5;
`;
const SelectLang = styled.div`
  display: flex;
  gap: 10px;
`;
const SelectLangInput = styled.input.attrs({
  type: "radio",
})`
  display: none;
  &:checked ~ label {
    font-family: var(--famyli);
    color: #ffa542;
    font-weight: var(--fw-bold);
  }
`;
const SelectLangLabel = styled.label`
  font-family: var(--famyli);
  color: #101010;
  font-weight: var(--fw-mediun);
  cursor: pointer;
`;

interface footerProps {
  footerLang?: object;
}

const Footer = (props: footerProps) => {
  const { footerLang = {} } = props;
  const { t, i18n } = useTranslation();

  const [toggleLang, setToggleLang] = useState("ru");

  const selectLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(e.target.value);
    setToggleLang(e.target.value);
  };

  useEffect(() => {
    for (let value of Object.keys(footerLang)) {
      if (value === i18n.language) {
        setToggleLang("ru");
      }
    }
  }, [i18n.language, footerLang]);

  console.log(toggleLang);

  return (
    <Wrapper>
      <FooterBlock>
        <FooterContent>
          <FooterLogo to="/">QPICK</FooterLogo>
          <FlexBox>
            <FooterNavLink to="/favourites">{t("favourites")}</FooterNavLink>
            <FooterNavLink to="/shoplist">{t("cart")}</FooterNavLink>
            <FooterNavLink to="/contacts">{t("сontacts")}</FooterNavLink>
          </FlexBox>
          <FlexBox>
            <FooterNavLink to="/requirement">{t("requirement")}</FooterNavLink>
            <LangBlock>
              <IconLang className="i-language" />
              <SelectLang>
                {Object.entries(footerLang).map(([key, value], i) => (
                  <div key={i}>
                    <SelectLangInput
                      value={key}
                      id={key}
                      name="select-lang"
                      onChange={selectLang}
                      defaultChecked={toggleLang === key}
                    />
                    <SelectLangLabel htmlFor={key}>{value}</SelectLangLabel>
                  </div>
                ))}
              </SelectLang>
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
        </FooterContent>
      </FooterBlock>
    </Wrapper>
  );
};

export default Footer;
