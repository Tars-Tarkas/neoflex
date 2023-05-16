import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import ShopCardItem from "./ShopCardItem";
import { useSelector } from "react-redux";

import { ICardItem } from "../types/card";
const ShopCardBlock = styled.main``;

const ShopCardContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShopCardTitle = styled.h2`
  font-family: var(--family);
  color: #838383;
  font-size: 20px;
`;

const ShopCardsSum = styled.div`
  width: 350px;
  background-color: white;
  position: relative;
  border-radius: var(--radius);
  padding: 22px;
  display: flex;
  justify-content: space-between;
  height: 120px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const ShopCardsButton = styled.button`
  position: absolute;
  width: 100%;
  background: #101010;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: var(--fw-semibold);
  font-size: 17px;
  height: 65px;
  border-radius: 20px;
  font-family: var(--family);
  bottom: 0;
  left: 0;
`;

const ShopCardText = styled.span`
  font-family: var(--family);
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
  position: relative;
`;

const ShopCardItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ShopCards: React.FC = () => {
  const { shopCards = [] } = useSelector((state: any) => state.Card);
  return (
    <>
      <ShopCardBlock>
        <Wrapper>
          <ShopCardTitle>Корзина</ShopCardTitle>
          <ShopCardContent>
            <ShopCardItems>
              {shopCards.map((item: ICardItem) => {
                return <ShopCardItem key={item.id} {...item} />;
              })}
            </ShopCardItems>
            <ShopCardsSum>
              <ShopCardText>Итого:</ShopCardText>
              <ShopCardText>Итого:</ShopCardText>
              <ShopCardsButton>Перейти к оформлению</ShopCardsButton>
            </ShopCardsSum>
          </ShopCardContent>
        </Wrapper>
      </ShopCardBlock>
    </>
  );
};

export default ShopCards;
