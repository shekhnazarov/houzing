import React from "react";
import Filter from "../Filter";
import {
  Container,
  Main,
  Wrapper,
  Section,
  Logo,
  Link,
  LogoText,
  Menu,
} from "./style";
import { NavbarList } from "../../utils/Navbar";
import Button from "../Generic/Button/index.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { Dropdown, Space } from "antd";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const onClick = () => {
    !token && navigate("/signin");
  };

  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("token");
      navigate("/home");
    } else {
      navigate(`/${name}`);
    }
  };
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")}>
            <Logo />
            <LogoText>Houzing</LogoText>
          </Section>
          <Section>
            {NavbarList.map(({ id, path, title, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    key={index}
                    to={path}
                    className={({ isActive }) => isActive && "active"}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section onClick={onClick}>
            {!token ? (
              <Button width={120} type="dark">
                Login
              </Button>
            ) : (
              <Dropdown
                trigger={["click"]}
                dropdownRender={() => {
                  return (
                    <Menu>
                      <Menu.Item
                        data-name="my-profile"
                        onClick={onClickProfile}
                      >
                        My profile
                      </Menu.Item>
                      <Menu.Item
                        data-name="my-properties"
                        onClick={onClickProfile}
                      >
                        My Properties
                      </Menu.Item>
                      <Menu.Item
                        data-name="my-favourite"
                        onClick={onClickProfile}
                      >
                        Favourites
                      </Menu.Item>
                      <Menu.Item data-name="logout" onClick={onClickProfile}>
                        Log out
                      </Menu.Item>
                    </Menu>
                  );
                }}
              >
                <Space>
                  <Button type={"dark"}>Profile</Button>
                </Space>
              </Dropdown>
            )}
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
