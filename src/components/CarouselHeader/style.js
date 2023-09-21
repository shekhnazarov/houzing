import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 571px;
  object-fit: cover;

  @media screen and (max-width: 480px){
    height: 712px;
  }
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 48%;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 17px;
  background-color: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => !left && "rotate(-180deg)"};
  right: ${({ left }) => !left && "20px"};
  left: ${({ left }) => left && "20px"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 480px){
    display: none;
  }
`;

const Blur = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

Content.Title = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 109.091% */
  letter-spacing: -0.88px;
  margin-bottom: 8px;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
  }
`;

Content.Desc = styled.h4`
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

Content.Price = styled.h3`
  color: #fff;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 128.571% */
  letter-spacing: -0.56px;

  @media screen and (max-width: 480px) {
    margin-top: 12px;
  }
`;

export { Container, Image, Arrow, Blur, Content, Wrapper };
