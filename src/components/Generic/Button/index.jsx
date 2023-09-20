import React from "react";
import { Container } from "./style";

const Button = ({
  children,
  height,
  width,
  type,
  fontSize,
  onClick,
  disabled,
}) => {
  return (
    <Container
      disabled={disabled}
      height={height}
      width={width}
      type={type}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children || "Button Generic"}
    </Container>
  );
};

export default Button;
