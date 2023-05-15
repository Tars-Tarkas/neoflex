import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Wrapper from "./Wrapper";

const HeaderLogo = styled.span`
  font-family: var(--family);
  color: #101010;
  font-weight: var(--fw-bold);
  font-size: 25px;
`;

const HeaderBlock = styled.header`
  padding-top: 15px;
`;

const HeaderIconsBlock = styled.div`
  display: flex;
  gap: 45px;
`;

const IconFav = styled.i`
  color: #838383;
  position: relative;
  font-size: 20px;
`;

const IconShop = styled.i`
  color: #838383;
  position: relative;
  font-size: 20px;
`;

const IconsCount = styled.span`
  background-color: #ffa542;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  position: absolute;
  font-size: 15px;
  font-weight: var(--fw-mediun);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 14px;
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

interface HeaderProps {
  count?: number;
  fav?: number;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { count = 0, fav = 0 } = props;
  const { shopCards = [] } = useSelector((state: any) => state.Card);

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <HeaderContent>
            <HeaderLink to="/">
              <HeaderLogo>QPICK</HeaderLogo>
            </HeaderLink>
            <HeaderIconsBlock>
              <HeaderLink to="/shoplist">
                <IconFav className="i-fav">
                  <IconsCount>{fav}</IconsCount>
                </IconFav>
              </HeaderLink>
              <HeaderLink to="/shoplist">
                <IconShop className="i-shopping">
                  <IconsCount>{shopCards.length}</IconsCount>
                </IconShop>
              </HeaderLink>
            </HeaderIconsBlock>
          </HeaderContent>
        </Wrapper>
      </HeaderBlock>
    </>
  );
};

export default Header;
