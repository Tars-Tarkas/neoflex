import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ICardItem } from "../types/card";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import Card from "./Card";

const TitleStyle = styled.h2`
  font-family: var(--family);
  color: #838383;
  font-size: 20px;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const CardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const SectionStyle = styled.section`
  padding-top: 30px;
`;
interface ICardListProps {
  title: string;
}

const CardList: React.FC<ICardListProps> = ({ title }): JSX.Element => {
  const { cards } = useSelector((state: any) => state.Card);

  const { headphones = [], wireless_headphones = [] } = cards;

  const { t } = useTranslation();

  useEffect(() => {
    document.title = title;
  });
  return (
    <Wrapper>
      <SectionStyle>
        <TitleStyle>{t("headphones")}</TitleStyle>
        <CardsBlock>
          {headphones.map((item: ICardItem) => {
            return <Card key={item.id} {...item} />;
          })}
        </CardsBlock>
      </SectionStyle>
      <SectionStyle>
        <TitleStyle>{t("Wireless_headphones")}</TitleStyle>
        <CardsBlock>
          {wireless_headphones.map((item: ICardItem) => {
            return <Card key={item.id} {...item} />;
          })}
        </CardsBlock>
      </SectionStyle>
    </Wrapper>
  );
};

export default CardList;
