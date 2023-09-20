import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: relative;
  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.06),
    0px 7px 46px 0px rgba(0, 0, 0, 0.06), 0px 20px 38px 0px rgba(0, 0, 0, 0.06);
  max-width: 280px;
  max-height: 350px;
  border-radius: 3px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 3px;
`;

const Blur = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
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
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;

export { Container, Image, Blur, Content };
