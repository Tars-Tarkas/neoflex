import React from "react";
import styled from "styled-components";

const WrapperStyle = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;
const Wrapper = ({ children }: any) => {
  return (
    <>
      <WrapperStyle>{children} </WrapperStyle>
    </>
  );
};

export default Wrapper;
