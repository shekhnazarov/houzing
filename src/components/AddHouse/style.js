import styled from "styled-components";
import { ReactComponent as del } from "../../assets/icons/trash.svg";

const getSize = ({ width }) => {
  switch (width) {
    case "100":
      return "100%";
    case "75":
      return "75%";
    case "50":
      return "50%";
    default:
      return "100%";
  }
};
const Container = styled.div`
  padding: var(--paddingPrimary);
  max-width: 1440px;
  width: 100%;
  margin: 32px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const MenuWrapper = styled.div`
  width: 100%;
  padding: 30px;
  background-color: white;
  border: 1px solid var(--colorBorder);
`;
const Section = styled.div`
  width: ${getSize};
  display: flex;
  flex-direction: ${({ column }) => column && "column"};
  margin-top: 10px;
  margin-bottom: 20px;
  gap: 20px;
`;

const SelectCategory = styled.select`
  min-width: 120px;
  width: 100%;
  max-width: 200px;
  border: 1px solid var(--colorBorder);
  outline: none;
  font-size: 14px;
  padding: 0 16px;
  .ant-select-selector {
    height: 44px !important;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;

const IconDelete = styled(del)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  :hover {
    & path {
      fill: red;
    }
  }
`;

export { Container, Wrapper, MenuWrapper, Section, SelectCategory, IconDelete };
