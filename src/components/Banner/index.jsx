import React from "react";
import { Container, Image, Blur, Content, Wrapper } from "./style";
import carouselImage2 from "../../assets/images/carousel-image2.png";
import { Button } from "../Generic";

const Banner = () => {
  return (
    <Container>
      <Image src={carouselImage2} />
      <Blur />
      <Wrapper>
        <Content>
          <Content.Title>
            Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
          </Content.Title>
          <Button type="primary">Read More</Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Banner;
