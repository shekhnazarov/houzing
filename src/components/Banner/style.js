import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 571px;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
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
  width: 555px;
  color: #fff;
  text-align: center;
  /* Heading/H4/Semibold/Desktop */
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 128.571% */
  letter-spacing: -0.56px;
  margin-bottom: 60px;
`;

export { Container, Image, Blur, Content, Wrapper };
