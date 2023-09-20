import React, { useState } from "react";
import { Container, Wrapper, Info, Link } from "./style";
import { Button, Input } from "../Generic";
import { useRequet } from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const Signin = () => {
  const [body, setBody] = useState({});
  const request = useRequet();
  const navigate = useNavigate();
  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const info = () => {
    message.success("Succes");
  };

  const warning = () => {
    message.warning("Login yoki parol xato");
  };

  const onSubmit = async () => {
    try {
      request({
        url: "/public/auth/login",
        method: "POST",
        body,
        me: true,
      }).then((res) => {
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);
          info();
        } else {
          warning();
        }
      });
    } catch (err) {
      return err;
    }
  };

  return (
    <Container>
      <Wrapper>
        <h3 className="subTitle">Sign In</h3>
        <Input onChange={onChange} placeholder="email" type="email"></Input>
        <Input
          onChange={onChange}
          placeholder="password"
          type="password"
        ></Input>
        <Button type="primary" width="100%" onClick={onSubmit}>
          Login
        </Button>
        <Info>
          Sizda hali akkount yo'qmi?{" "}
          <Link to={"/signup"}>Ro'yhatdan o'tish</Link>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Signin;
