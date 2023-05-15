import React from "react";
import styled from "styled-components";

interface IconsProps {
  classname: stylename;
  count: number;
  onClick: () => void;
}
type stylename =
  | "VK"
  | "Whatsapp"
  | "Telegram"
  | "shopping"
  | "rate"
  | "fav"
  | "del"
  | "language";

// const Icon = styled.i.attrs(() => ({ className: classname }))```

// `;

const Icons: React.FC<IconsProps> = (props) => {
  const { classname, count, onClick } = props;
  return (
    <>
      <i className={`i-` + { classname }} onClick={onClick}></i>
      <span>{count}</span>
    </>
  );
};

export default Icons;
