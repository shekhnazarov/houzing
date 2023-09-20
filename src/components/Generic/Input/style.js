import styled from "styled-components";

const getSize = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        border: "1px solid var(--colorTextPrimary)",
        color: "var(--colorTextPrimary)",
        backgroundColor: "var(--colorPrimary)",
      };
    case "primary":
      return {
        border: 0,
        color: "var(--colorTextPrimary)",
        backgroundColor: "var(--backgroundPrimary)",
      };
    case "light":
      return {
        border: "1px solid var(--colorBorder)",
        color: "var(--colorPrimary)",
        backgroundColor: "var(--colorTextPrimary)",
      };
    default:
      return {
        border: "1px solid var(--colorPrimary)",
        color: "var(--colorPrimary)",
        backgroundColor: "var(--colorTextPrimary)",
      };
  }
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  min-width: 120px;
  border-radius: 2px;
  outline: none;
  border: 1px solid var(--colorBorder);
  background-color: #ffffff;
  padding-left: ${({ label }) => (label ? "44px" : "16px")};
  /* ${getSize} */
  &:focus {
    border: 1px solid #0061df;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 16px;
`;

export { Container, Label, Wrapper };
