import React from "react";
import styled from "styled-components";
import { ICardItem } from "../types/card";
import { useDispatch } from "react-redux";
import { addShopList } from "../store/CardSlice";

const CardImg = styled.img``;

const CardItem = styled.div`
  width: 350px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: var(--radius);
  padding-left: 21px;
  padding-right: 21px;
  padding-top: 26px;
  padding-bottom: 26px;
  text-align: center;
`;

const CartTitle = styled.span`
  font-size: 17px;
  font-weight: var(--fw-semibold);
`;

const CardPrice = styled.span`
  color: #ffa542;
  font-weight: var(--fw-semibold);
  font-size: 17px;
`;

const RateBlock = styled.div``;
const IconRate = styled.i`
  color: #ffce7f;
  font-size: 20px;
`;

const CardRate = styled.span`
  color: #838383;
  font-weight: var(--fw-semibold);
  font-size: 17px;
`;

const CardPayButton = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: var(--fw-semibold);
  color: #000000;
  font-size: 17px;
`;

const CardDescription = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Card: React.FC<ICardItem> = (item): JSX.Element => {
  const { img, title, price, rate } = item;

  const Locale = (price: number) => {
    const locale = navigator.language;
    const LocaleOptions: Intl.NumberFormatOptions = {
      style: "currency",
      currency: "RUB",
      currencyDisplay: "symbol",
      useGrouping: false,
      minimumFractionDigits: 0,
    };
    return price.toLocaleString(locale, LocaleOptions);
  };

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addShopList(item));
  };
  return (
    <>
      <CardItem>
        <CardImg src={process.env.PUBLIC_URL + img} />
        <CardDescription>
          <CartTitle>{title}</CartTitle>
          <CardPrice>{Locale(price)}</CardPrice>
        </CardDescription>
        <CardDescription>
          <RateBlock>
            <IconRate className="i-rate" />
            <CardRate>{rate}</CardRate>
          </RateBlock>
          <CardPayButton onClick={onClick}>Купить</CardPayButton>
        </CardDescription>
      </CardItem>
    </>
  );
};

export default Card;
