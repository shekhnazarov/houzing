import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Wrapper, Container } from "./style";
import HouseCard from "./../HouseCard/index";
import { useLocation, useNavigate } from "react-router-dom";
import { PropertiesContext } from "../../context/Properties";
const { REACT_APP_BASE_URL: url } = process.env;

export const Favourite = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [, dispatch] = useContext(PropertiesContext);
  const { refetch, data } = useQuery(
    [search],
    async () => {
      const res = await fetch(`${url}/houses/getAll/favouriteList`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return await res.json();
    },
    {
      onSuccess: (res) => {
        dispatch({ type: "refetch", payload: refetch });
      },
    }
  );

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  return (
    <Container>
      <h3 className="title">Favourite</h3>
      <h5 className="info">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </h5>
      {data?.data?.length ? (
        <Wrapper>
          {data.data.map((info) => {
            return (
              <HouseCard
                key={info.id}
                info={info}
                onClick={() => onSelect(info.id)}
              />
            );
          })}
        </Wrapper>
      ) : (
        <h1 className="nodata">No Data Found</h1>
      )}
    </Container>
  );
};

export default Favourite;
