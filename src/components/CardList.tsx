import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../store/CardSlice";
import { ICardItem } from "../types/card";
import styled from "styled-components";
import Wrapper from "./Wrapper";

import Card from "./Card";

const CardTitle = styled.h2`
  font-family: var(--family);
  color: #838383;
  font-size: 20px;
`;

const CardsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CardList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCard());
  }, [dispatch]);

  const { cards, loading, error } = useSelector((state: any) => state.Card);

  const { headphones = [], wireless_headphones = [] } = cards;
  return (
    <>
      <Wrapper>
        <CardTitle>Наушники</CardTitle>
        <CardsBlock>
          {headphones.map((item: ICardItem) => {
            return <Card key={item.id} {...item} />;
          })}
        </CardsBlock>

        <CardTitle>Беспроводные наушники</CardTitle>
        <CardsBlock>
          {wireless_headphones.map((item: ICardItem) => {
            return <Card key={item.id} {...item} />;
          })}
        </CardsBlock>
      </Wrapper>
    </>
  );
};

export default CardList;
