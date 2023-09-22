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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Container className="slider-recommended">
      <Content>
        <div className="title">Recommended</div>
        <div className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Slider {...settings} className="recommended-slider">
        {users?.length ?
          users?.map((info) => {
            return (
              <HouseCard
                key={info.id}
                onClick={() => navigate(`/properties/${info.id}`)}
                info={info}
              />
            );
          }) : carts?.map((info) => {
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
