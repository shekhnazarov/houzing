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
  padding: 10px 130px;
  max-width: 1440px;
  margin: auto;
  width: 100%;
  background-color: #fff;
  gap: 20px;

  @media screen and (max-width: 680px) {
    display: none;
    flex-wrap: wrap;
    justify-content: center;
    padding: 12px 24px;
    margin: 120px 16px 0;
  }
`;

const MenuWrapper = styled.div`
  width: 100%;
  padding: 30px;
  background-color: white;
  border: 1px solid var(--colorBorder);

  @media screen and (max-width: 680px){
    width: 400px;
  }
`;
const Section = styled.div`
  width: ${getSize};
  display: flex;
  flex-wrap: nowrap;
  margin-top: 10px;
  margin-bottom: 20px;
  gap: 20px;

  @media screen and (max-width: 680px){
    flex-wrap: wrap;
    flex-direction: column;
    width: 100% !important;
  }
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
