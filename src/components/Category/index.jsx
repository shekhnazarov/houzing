import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Content } from "./style";
import CategoryCard from "../CategoryCard";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Category = () => {
  const [users, setUsers] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => setUsers(res?.data || []))
      .catch(err => {
        setUsers([]);
        return err;
      });
  }, []);
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Content>
        <h3 className="title">Category</h3>
        <h5 className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </h5>
      </Content>
      <Slider {...settings}>
        {users?.map((info) => {
          return (
            <CategoryCard
              key={info.id}
              onClick={() => navigate(`/properties?category_id=${info.id}`)}
              data={info}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Category;
