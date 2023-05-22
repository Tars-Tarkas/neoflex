import * as React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactsList from "../components/ContactsList";

const langObj = {
  kz: "Каз",
  ru: "Рус",
  en: "Eng",
};

const MainStyle = styled.main``;

interface IContactsProps {
  title: string;
}

const Contacts: React.FC<IContactsProps> = ({ title }): JSX.Element => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <Header />
      <MainStyle>
        <ContactsList />
      </MainStyle>
      <Footer footerLang={langObj} />
    </>
  );
};

export default Contacts;
