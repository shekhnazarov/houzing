import React, { useEffect, useState } from "react";
import { Wrapper, Container } from "./style";
import HouseCard from "./../HouseCard/index";
import { useLocation, useNavigate } from "react-router-dom";
import {Button} from "../Generic"
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
    users?.length ?
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
    </Container> : <Container>
      <img src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg" alt="404 error" style={{width: "40%", marginBottom: "40px"}} />
      
      <Button type="dark" onClick={()=> navigate("/home")}>Back Home</Button>
    </Container>
  );
};

export default Properties;
