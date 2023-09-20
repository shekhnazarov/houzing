import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Content } from "./style";
import { useNavigate } from "react-router-dom";
import HouseCard from "./../HouseCard/index";
import { carts } from "../../utils/carts";

const { REACT_APP_BASE_URL: url } = process.env;

const Recommended = () => {
  const [users, setUsers] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => setUsers(res?.data || []))
      .catch(err => {
        setUsers(carts)
      });
  }, []);
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
        <h3 className="title">Recommended</h3>
        <h5 className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </h5>
      </Content>
      <Slider {...settings} className="slider-recommended">
        {users &&
          users?.map((info) => {
            return (
              <HouseCard
                key={info.id}
                onClick={() => navigate(`/properties/${info.id}`)}
                info={info}
              />
            );
          })}
      </Slider>
    </Container>
  );
};

export default Recommended;
