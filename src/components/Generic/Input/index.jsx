import React, { forwardRef } from "react";
import { Container, Label, Wrapper } from "./style";

const Input = forwardRef(
  (
    {
      height,
      width,
      type,
      fontSize,
      placeholder,
      name,
      value,
      defaultValue,
      onChange,
      id,
      label,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Container
          id={id}
          height={height}
          width={width}
          type={type}
          fontSize={fontSize}
          placeholder={placeholder}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          label={label}
          ref={ref}
        />
      </Wrapper>
    );
  }
);
export default Input;
