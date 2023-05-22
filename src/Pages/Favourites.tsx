import * as React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FavouritesList from "../components/FavouritesList";

const langObj = {
  kz: "Каз",
  ru: "Рус",
  en: "Eng",
};
const MainStyle = styled.main``;

interface IFavouritesProps {
  title: string;
}

const Favourites: React.FC<IFavouritesProps> = ({ title }): JSX.Element => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <Header />
      <MainStyle>
        <FavouritesList />
      </MainStyle>
      <Footer footerLang={langObj} />
    </>
  );
};

export default Favourites;
