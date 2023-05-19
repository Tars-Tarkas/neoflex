import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../store/CardSlice";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import Loader from "../components/Loader";

const MainBlock = styled.main``;

const langObj = {
  ru: "Рус",
  en: "Eng",
};

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCard());
  }, [dispatch]);
  const { loading, error } = useSelector((state: any) => state.Card);
  return (
    <>
      <Header />
      <MainBlock>
        {loading ? <Loader /> : error ? <p>{error}</p> : <CardList />}
      </MainBlock>
      <Footer footerLang={langObj} />
    </>
  );
};

export default Main;
