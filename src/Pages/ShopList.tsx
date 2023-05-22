import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopCards from "../components/ShopCard";

const langObj = {
  kz: "Каз",
  ru: "Рус",
  en: "Eng",
};
const MainBlock = styled.main``;

interface IShopListProps {
  title: string;
}

const ShopList: React.FC<IShopListProps> = ({ title }): JSX.Element => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <Header />
      <MainBlock>
        <ShopCards />
      </MainBlock>

      <Footer footerLang={langObj} />
    </>
  );
};

export default ShopList;
