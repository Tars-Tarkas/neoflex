import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderLogo = styled.span`
  font-family: var(--family);
  color: #101010;
  font-weight: var(--fw-bold);
  font-size: 25px;
`;

const HeaderBlock = styled.header`
  padding-top: 16px;
  padding-right: 10px;
  margin-bottom: 15px;
`;

const HeaderIconsBlock = styled.div`
  display: flex;
  gap: 45px;
  padding-right: 25px;
`;

const IconFav = styled.i`
  color: #838383;
  position: relative;
  font-size: 21px;
`;

const IconShop = styled.i`
  color: #838383;
  position: relative;
  font-size: 22px;
`;

const IconsCount = styled.span`
  background-color: #ffa542;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  font-size: 15px;
  font-weight: var(--fw-mediun);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 16px;
  bottom: 10px;
  font-family: var(--family);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLink = styled(NavLink)`
  text-decoration: none;
`;

const HeaderWrapper = styled.div`
  max-width: 1135px;
  margin: 0 auto;
`;

interface HeaderProps {
  count?: number;
  fav?: number;
}

const Header: React.FC<HeaderProps> = () => {
  const { shopCards } = useSelector((state: any) => state.Card);

  const getTotal = (array: []) => {
    let totalQuantity = 0;
    array.forEach((item: any) => {
      totalQuantity += item.count;
    });
    return { totalQuantity };
  };

  return (
    <HeaderWrapper>
      <HeaderBlock>
        <HeaderContent>
          <HeaderLink to="/">
            <HeaderLogo>QPICK</HeaderLogo>
          </HeaderLink>
          <HeaderIconsBlock>
            <HeaderLink to="/favourites">
              <IconFav className="i-fav">
                <IconsCount>2</IconsCount>
              </IconFav>
            </HeaderLink>
            <HeaderLink to="/shoplist">
              <IconShop className="i-shopping">
                {getTotal(shopCards).totalQuantity !== 0 ? (
                  <IconsCount>{getTotal(shopCards).totalQuantity}</IconsCount>
                ) : null}
              </IconShop>
            </HeaderLink>
          </HeaderIconsBlock>
        </HeaderContent>
      </HeaderBlock>
    </HeaderWrapper>
  );
};

export default Header;
