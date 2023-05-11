import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../store/CardSlice";
import { ICardItem } from "../types/card";
import styled from "styled-components";

import Card from "./Card";

const CartTitle = styled.h2`
  font-family: var(--family);
  color: #838383;
  font-size: 20px;
`;

const Wrapper = styled.div`
  width: 1110px;
  margin: 0 auto;
`;

const CardList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCard());
  }, [dispatch]);

  const { cards, loading, error } = useSelector((state: any) => state.Card);

  return (
    <>
      <Wrapper>
        <CartTitle>Наушники</CartTitle>
        {cards.headphones?.map((item: ICardItem) => {
          <Card key={item.id} {...item} />;
        })}

        <CartTitle>Беспроводные наушники</CartTitle>
        {cards.wireless_headphones?.map((item: ICardItem) => {
          <Card key={item.id} {...item} />;
        })}
      </Wrapper>
    </>
  );
};

export default CardList;
