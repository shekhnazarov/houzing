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

const getWidth = ({ width }) => {
  if (!width) return "130px";
  else if (`${width}`.includes("%")) return `${width}%`;
  else return `${width}px`;
};

const Container = styled.button`
  opacity: ${({ disabled }) => (disabled ? "0.6" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  border-radius: 2px;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: "${getWidth}";
  min-width: 120px;
  ${getSize}
`;

export { Container };
