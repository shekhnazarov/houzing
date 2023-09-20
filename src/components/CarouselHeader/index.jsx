import React, { useRef } from "react";
import { Container, Image, Arrow, Blur, Content, Wrapper } from "./style";
import { Carousel } from "antd";
import carouselImage1 from "../../assets/images/carousel-image.png";
import carouselImage2 from "../../assets/images/carousel-image2.png";

const CarouselHeader = () => {
  const sliderRef = useRef();

  const onPrev = () => {
    return sliderRef.current.prev();
  };
  const onNext = () => {
    return sliderRef.current.next();
  };
  return (
    <Container>
      <Carousel ref={sliderRef} className="header-slider">
        <Image src={carouselImage1} />
        <Image src={carouselImage2} />
      </Carousel>
      <Blur />
      <Wrapper>
        <Content>
          <Content.Title>Skyper Pool Partment</Content.Title>
          <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
          <Content.Price>$5,250/mo</Content.Price>
        </Content>
        <Arrow left="true" onClick={onPrev} name="left" />
        <Arrow onClick={onNext} name="right" />
      </Wrapper>
    </Container>
  );
};

export default CarouselHeader;
