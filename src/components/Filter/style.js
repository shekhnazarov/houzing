import styled from "styled-components";
import { Select } from "antd";

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
  display: flex;
  align-items: center;
  padding: var(--paddingPrimary);
  max-width: 1440px;
  margin: auto;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
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
  margin-top: 10px;
  margin-bottom: 20px;
  gap: 20px;
`;

const SelectAnt = styled(Select)`
  width: 100%;
  min-width: 200px;
  display: flex;
  align-items: center;

  .ant-select-selector {
    height: 44px !important;
    border-radius: 2px !important;
  }
`;

export { Container, MenuWrapper, Section, SelectAnt };
