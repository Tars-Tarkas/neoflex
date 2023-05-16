import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ICardItem } from "../types/card";
import { useDispatch } from "react-redux";
import { removeShopList } from "../store/CardSlice";

const ShopCardItems = styled.div`
  position: relative;
  width: 633px;
  height: 218px;
  background-color: white;
  border-radius: var(--radius);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding-left: 18px;
  padding-top: 17px;
  padding-right: 28px;
  margin-bottom: 17px;
  display: grid;
  grid-template-columns: 170px auto;
  grid-template-rows: 152px 36px;
  align-items: center;
  grid-template-areas:
    "A B"
    "C D";
`;

const ShopCardImg = styled.img`
  width: 146px;
  height: 136px;
`;

const IconRemove = styled.i`
  position: absolute;
  top: 17px;
  right: 28px;
  font-size: 19px;
  color: #df6464;
  cursor: pointer;
`;

const ShopCardCountButton = styled.button`
  background: #ffce7f;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: var(--fw-semibold);
  font-family: var(--family);
  width: 35.17px;
  height: 30px;
  border-radius: 50%;
  font-size: 30px;
  line-height: 0;
  font-weight: var(--fw-regular);
`;

const ShopCardPrice = styled.span`
  font-family: var(--family);
  color: #aaaaaa;
  font-size: 15px;
  font-weight: var(--fw-semibold);
`;

const ShopCardTitle = styled.h3`
  font-family: var(--family);
  color: #1c1c27;
  font-weight: var(--fw-mediun);
  font-size: 17px;
  margin: 0;
  padding-top: 23px;
  margin-bottom: 12px;
`;

const ShopCardCount = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  grid-area: C;
  width: 125px;
`;

const ShopCardTitlePrice = styled.div`
  grid-area: B;
  align-self: center;
`;

const ShopCardTotalPrice = styled.span`
  font-family: var(--family);
  color: #1c1c27;
  font-size: 15px;
  font-weight: var(--fw-semibold);
  grid-area: D;
  text-align: right;
`;

const ShopCardItem: React.FC<ICardItem> = (item) => {
  const { img, price, title, count } = item;

  const dispatch = useDispatch();

  // const [count, setCount] = useState(1);

  const onClick = () => {
    dispatch(removeShopList(item));
  };

  const Locale = (price: number) => {
    const locale = navigator.language;
    const LocaleOptions: Intl.NumberFormatOptions = {
      style: "currency",
      currency: "RUB",
      currencyDisplay: "symbol",
      useGrouping: true,
      minimumFractionDigits: 0,
    };
    return price.toLocaleString(locale, LocaleOptions);
  };
  return (
    <>
      <ShopCardItems>
        <ShopCardImg src={process.env.PUBLIC_URL + img}></ShopCardImg>
        <ShopCardTitlePrice>
          <ShopCardTitle>{title}</ShopCardTitle>
          <ShopCardPrice>{Locale(price)}</ShopCardPrice>
        </ShopCardTitlePrice>

        <ShopCardCount>
          <ShopCardCountButton>-</ShopCardCountButton> {count}
          <ShopCardCountButton>+</ShopCardCountButton>
        </ShopCardCount>
        <ShopCardTotalPrice>{Locale(price * count)}</ShopCardTotalPrice>

        <IconRemove className="i-del" onClick={onClick} />
      </ShopCardItems>
    </>
  );
};

export default ShopCardItem;
