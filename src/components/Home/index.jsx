import React from "react";
import CarouselHeader from "../CarouselHeader";
import Category from "../Category";
import Recommended from "../Recommended";
import Why from "../Why";
import Recent from "../Recent";
import Banner from "../Banner";

const Home = () => {
  return (
    <div>
      <CarouselHeader />
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Recent />
    </div>
  );
};

export default Home;
