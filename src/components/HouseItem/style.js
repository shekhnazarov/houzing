import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  padding-bottom: 50px;
`;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 130px;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

Content.Title = styled.h3`
  color: var(--color-2, #0d263b);
  /* Paragraph/Large/Semibold */
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  margin: 48px 0 16px;
`;
const User = styled.div`
  width: 25%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 26px;
  border-radius: 3px;
  border: 1px solid var(--border, #e6e9ec);
  background: #fff;
  gap: 24px;
`;

User.Top = styled.div`
  display: flex;
`;

User.Title = styled.h3`
  color: var(--text-1, #0d263b);
  /* Paragraph/Small/Semibold */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;
User.Img = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: white;
  margin-right: 12px;
`;
User.Name = styled.div`
  color: ${({ phone }) => (phone ? "#696969" : "#0d263b")};
  /* Paragraph/Medium/Semibold */
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: ${({ phone }) => (phone ? "400" : "600")};
  line-height: 24px; /* 150% */
`;

const IconsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  justify-content: right;
  gap: 8px;
  margin-top: ${({ margin }) => margin && "25px"};
`;

const Icons = styled.div``;
const IconBox = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f8f9;
  margin: ${({ margin }) => (margin ? "0 10px 0 32px" : "0 10px 0 0")};
  cursor: pointer;

  :active {
    transform: scale(0.9);
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  gap: 24px;
`;

Details.Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
Icons.Share = styled(share)`
  width: 14px;
  height: 14px;
`;
Icons.Love = styled(love)`
  width: 15px;
  height: 15px;
`;

Icons.Bed = styled(bed)`
  margin-right: 8px;
`;
Icons.Bath = styled(bath)`
  margin-right: 8px;
`;
Icons.Car = styled(car)`
  margin-right: 8px;
`;
Icons.Ruler = styled(ruler)`
  margin-right: 8px;
`;
Icons.Calendar = styled(calendar)`
  margin-right: 8px;
`;

export {
  Container,
  Content,
  Wrapper,
  Icons,
  IconBox,
  Details,
  Section,
  IconsDiv,
  User,
  MainWrapper,
};
