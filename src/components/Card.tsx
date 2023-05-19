import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ICardItem } from "../types/card";
import { useDispatch } from "react-redux";
import { addShopList } from "../store/CardSlice";
import { locCurrency } from "../lib/lib";
import { type } from "os";

const CardImgBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 308px;
`;
const CardImg = styled.img``;

const CardItem = styled.div`
  width: 350px;
  height: 407px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: var(--radius);
  padding-left: 21px;
  padding-right: 21px;
  /* padding-top: 15px; */
  padding-bottom: 26px;
`;

const CardTitle = styled.span`
  font-size: 17px;
  font-weight: var(--fw-semibold);
  text-align: left;
  grid-area: A;
`;

const CardPrice = styled.span`
  color: #ffa542;
  font-weight: var(--fw-semibold);
  font-size: 17px;
  text-align: right;
  grid-area: B;
`;

const RateBlock = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
`;
const IconRate = styled.i`
  color: #ffce7f;
  font-size: 24px;
  padding-right: 10px;
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
  text-align: right;
  padding: 0;
  align-self: end;
  grid-area: F;
  position: relative;
  padding-left: 5px;
  padding-right: 5px;
  float: right;
  &:hover {
    text-decoration: underline;
    text-decoration-line: underline;
    text-decoration-style: dotted;
    text-decoration-color: #838383;
  }
`;

const CardPriceDiscontBlock = styled.div`
  grid-area: D;
  text-align: right;
`;
const CardPriceDiscount = styled.span`
  font-family: var(--family);
  color: #ffce7f;
  text-decoration-line: line-through;
  font-size: 13px;
  font-weight: var(--fw-semibold);
  padding-right: 10px;
  margin-bottom: 9px;
`;

const CardFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 21px 25px 25px;
  grid-template-areas:
    "A B"
    "D D"
    "E F";
`;

const Card: React.FC<ICardItem> = (item): JSX.Element => {
  const { img, title, price, rate, discount } = item;

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const onClick = () => {
    dispatch(addShopList(item));
  };
  return (
    <>
      <CardItem>
        <CardImgBlock>
          <CardImg src={process.env.PUBLIC_URL + img} />
        </CardImgBlock>

        <CardFooter>
          <CardTitle>{title}</CardTitle>
          <CardPrice>{locCurrency(price - discount, false)}</CardPrice>
          <CardPriceDiscontBlock>
            <CardPriceDiscount>
              {discount ? locCurrency(price, false) : null}
            </CardPriceDiscount>
          </CardPriceDiscontBlock>
          <RateBlock>
            <IconRate className="i-rate" />
            <CardRate>{rate}</CardRate>
          </RateBlock>
          <CardPayButton onClick={onClick}>{t("buy")}</CardPayButton>
        </CardFooter>
      </CardItem>
    </>
  );
};

export default Card;
