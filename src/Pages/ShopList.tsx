import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopCards from "../components/ShopCard";

const langObj = {
  kz: "Каз",
  ru: "Рус",
  en: "Eng",
};

const ShopList = () => {
  return (
    <>
      <Header />
      <ShopCards />
      <Footer footerLang={langObj} />
    </>
  );
};

export default ShopList;