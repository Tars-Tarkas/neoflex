import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ICardItem } from "../types/card";
import { useDispatch } from "react-redux";
import { removeShopList } from "../store/CardSlice";

const ShopCardItems = styled.div`
  width: 633px;
  background-color: white;
  border-radius: var(--radius);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 18px;
  position: relative;
`;

const ShopCardImg = styled.img`
  width: 146px;
  height: 136px;
`;

const IconRemove = styled.i`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 17px;
  color: #df6464;
  cursor: pointer;
`;

const ShopCardCount = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
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

const ShopCardImgBtn = styled.div``;

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
`;

const ShopCardItem: React.FC<ICardItem> = (item) => {
  const { img, price, title } = item;

  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

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
        <ShopCardImgBtn>
          <ShopCardImg src={process.env.PUBLIC_URL + img}></ShopCardImg>
          <ShopCardCount>
            <ShopCardCountButton>-</ShopCardCountButton> {count}
            <ShopCardCountButton>+</ShopCardCountButton>
          </ShopCardCount>
        </ShopCardImgBtn>
        <ShopCardTitle>{title}</ShopCardTitle>
        <ShopCardPrice>{Locale(price)}</ShopCardPrice>
        <IconRemove className="i-del" onClick={onClick} />
      </ShopCardItems>
    </>
  );
};

export default ShopCardItem;
