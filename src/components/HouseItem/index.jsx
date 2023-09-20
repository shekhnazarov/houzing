import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  IconBox,
  Wrapper,
  Icons,
  Details,
  Section,
  User,
  IconsDiv,
  MainWrapper,
} from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Button } from "../Generic";
import { Checkbox } from "antd";
import user from "../../assets/images/user-image.png";
import Yandex from "../Generic/YandexMap";
import Similar from "../Similar";
const { REACT_APP_BASE_URL: url } = process.env;

const HouseItem = () => {
  const [users, setUsers] = useState();
  const params = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`${url}/houses/id/${params?.id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUsers(res?.data);
        window.scrollTo(0, 0);
      })
      .catch(err => {
        setUsers([]);
        return err;
      });
  }, [params?.id]);
  return (
    users?.length ? 
    <Container>
      <MainWrapper>
        <Wrapper>
          <div style={{ width: "100%" }}>
            <Content>
              <div>
                <h3 className="title">{users?.name}</h3>
                <h5 className="info">
                  {users?.city}, {users?.address} {users?.country}
                </h5>
                <Details>
                  <Details.Item>
                    <Icons.Bed />
                    <h4 className="info">
                      Beds {users?.houseDetails?.beds || 0}
                    </h4>
                  </Details.Item>
                  <Details.Item>
                    <Icons.Bath />
                    <h4 className="info">
                      Baths {users?.houseDetails?.bath || 0}
                    </h4>
                  </Details.Item>
                  <Details.Item>
                    <Icons.Car />
                    <h4 className="info">
                      Garage {users?.houseDetails?.garage || 0}
                    </h4>
                  </Details.Item>
                  <Details.Item>
                    <Icons.Ruler />
                    <h4 className="info">
                      {users?.houseDetails?.area || 0} Sq Ft
                    </h4>
                  </Details.Item>
                  <Details.Item>
                    <Icons.Calendar />
                    <h4 className="info">
                      {users?.houseDetails?.area || 0} Year Built: 1800
                    </h4>
                  </Details.Item>
                </Details>
              </div>
              <div>
                <IconsDiv>
                  <IconBox>
                    <Icons.Share />
                  </IconBox>
                  <h5 className="info">Share</h5>
                  <IconBox margin="true">
                    <Icons.Love />
                  </IconBox>
                  <h5 className="info">Love</h5>
                </IconsDiv>
                <Section margin="true">
                  <h5 className="beforePrice text-left line-through">
                    {`$${users?.price}/mo` || "$7,500/mo"}
                  </h5>
                  <h4 className="subTitle ">
                    {`$${users?.salePrice}/mo` || "$2,800/mo"}
                  </h4>
                </Section>
                <Section>
                  <h5 className="info">Est. Mortgage</h5>
                </Section>
              </div>
            </Content>
            <Content.Title>Description</Content.Title>
            <div className="info">No description this house</div>
            <Content.Title>Location</Content.Title>
            <Yandex />
          </div>
          <User>
            <User.Top>
              <User.Img src={user} alt="user-image" />
              <div>
                <User.Name>Uy egasi nomi</User.Name>
                <User.Name phone="true">(97) 757 91 51</User.Name>
              </div>
            </User.Top>
            <Input placeholder="Name" />
            <Input placeholder="Phone" />
            <Input placeholder="Email" />
            <Input placeholder="Message" />
            <User.Title>Message</User.Title>
            <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
            <Button width={"100%"} type="primary">
              Send request
            </Button>
          </User>
        </Wrapper>
      </MainWrapper>
      <Similar />
    </Container> : <Container>
      <img src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg" alt="404 error" style={{width: "40%", marginBottom: "40px"}} />
      
      <Button type="dark" onClick={()=> navigate("/home")}>Back Home</Button>
    </Container>
  );
};

export default HouseItem;
