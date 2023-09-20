import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

const Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 330px;
  height: 430px;
  border-radius: 3px;
  border: 1px solid var(--border-color, #e6e9ec);
  background: var(--color-5, #fff);

  &:hover {
    box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.06),
      0px 7px 46px 0px rgba(0, 0, 0, 0.06),
      0px 20px 38px 0px rgba(0, 0, 0, 0.06);
  }
`;

Container.Header = styled.div`
  width: 100%;
  height: 220px;
`;
Container.Main = styled.div`
  padding: 24px 20px 16px;
`;
Container.Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
`;
const Image = styled.img`
  width: 100%;
  max-height: 220px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

Content.Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e9ec;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "row" : "column")};
  align-items: ${({ flex }) => flex && "center"};
`;

const Icons = styled.div``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Love = styled(love)`
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 50%;
  background-color: ${({ favorite }) => (favorite ? "#CC5040" : "#f6f8f9")};
  & path {
    fill: ${({ favorite }) => favorite && "white"};
  }
  margin-left: 20px;
`;

export { Container, Image, Content, Icons, Line, Wrapper };
