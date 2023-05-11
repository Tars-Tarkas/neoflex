import React from "react";
import styled from "styled-components";
import { ICardItem } from "../types/card";

const CardImg = styled.img``;

const CardItem = styled.div``;

const Card: React.FC<ICardItem> = (item): JSX.Element => {
  return (
    <>
      <CardItem>
        <CardImg src={item.img} />
      </CardItem>
    </>
  );
};

export default Card;
