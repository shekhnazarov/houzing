import React from "react";
import { Blur, Container, Content, Image } from "./style";
import noimg from "../../assets/images/noimg.jpg";
import category from "../../assets/images/category.png";

const CategoryCard = ({ data = {}, onClick }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Image src={category || noimg} />
      <Blur />
      <Content>{name || "Cottage"}</Content>
    </Container>
  );
};

export default CategoryCard;
