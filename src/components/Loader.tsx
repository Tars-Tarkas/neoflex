import * as React from "react";
import styled from "styled-components";

const LoaderStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

const LoaderSpiner = styled.div`
  width: 100px;
  height: 100%;
  display: inline-block;
  overflow: hidden;
  background: none;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-100px, -100px);
`;

const LoaderCircle = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 6px solid #838383;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ldio-rawv31rupf7 1s linear infinite;
  top: 60px;
  left: 60px;
  @keyframes ldio-rawv31rupf7 {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <>
      <LoaderSpiner>
        <LoaderStyle>
          <LoaderCircle></LoaderCircle>
        </LoaderStyle>
      </LoaderSpiner>
    </>
  );
};

export default Loader;
