import React, { useState } from "react";
import { Container, Info, Wrapper, Link } from "./style";
import { Button, Input } from "../Generic";
import { useRequet } from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [body, setBody] = useState({ roleIdSet: [0] });
  const request = useRequet();
  const navigate = useNavigate();
  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const onSubmit = async () => {
    try {
      request({
        url: "/public/auth/register",
        method: "POST",
        body,
        me: true,
      }).then((res) => {
        navigate("/signin");
      });
    } catch (err) {
      return err;
    }
  };

  return (
    <Container>
      <Wrapper>
        <h3 className="subTitle">Sign Up</h3>
        <Input onChange={onChange} placeholder="email" type="email" />
        <Input onChange={onChange} placeholder="firstname" type="text" />
        <Input onChange={onChange} placeholder="lastname" type="text" />
        <Input onChange={onChange} placeholder="password" type="password" />
        <Button type="primary" width="100%" onClick={onSubmit}>
          Login
        </Button>
        <Info>
          Sizda allaqachon ro'yhatdan o'tganmisz?{" "}
          <Link to={"/signin"}>Akkountga kirish</Link>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Signup;
