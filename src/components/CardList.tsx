import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ICardItem } from "../types/card";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import Card from "./Card";

const CardTitle = styled.h2`
  font-family: var(--family);
  color: #838383;
  font-size: 20px;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

const CardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const CardSection = styled.section`
  padding-top: 30px;
`;

const CardList = () => {
  const { cards } = useSelector((state: any) => state.Card);

  const { headphones = [], wireless_headphones = [] } = cards;

  const { t } = useTranslation();
  return (
    <Wrapper>
      <CardSection>
        <CardTitle>{t("headphones")}</CardTitle>
        <CardsBlock>
          {headphones.map((item: ICardItem) => {
            return <Card key={item.id} {...item} />;
          })}
        </CardsBlock>
      </CardSection>
      <CardSection>
        <CardTitle>{t("Wireless_headphones")}</CardTitle>
        <CardsBlock>
          {wireless_headphones.map((item: ICardItem) => {
            return <Card key={item.id} {...item} />;
          })}
        </CardsBlock>
      </CardSection>
    </Wrapper>
  );
};

export default CardList;
