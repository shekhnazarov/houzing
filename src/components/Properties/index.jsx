import React, { useEffect, useState } from "react";
import { Wrapper, Container } from "./style";
import HouseCard from "./../HouseCard/index";
import { useLocation, useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = () => {
  const [users, setUsers] = useState();
  const { search } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setUsers(res?.data || []))
      .catch(err => {
        setUsers([]);
        return err;
      });
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <Container>
      <h3 className="title">Properties</h3>
      <h5 className="info">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </h5>
      <Wrapper>
        {users?.map((info) => {
          return (
            <HouseCard
              key={info.id}
              info={info}
              onClick={() => onSelect(info.id)}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Properties;
