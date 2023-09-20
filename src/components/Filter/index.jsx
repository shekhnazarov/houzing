import React, { useRef, useState, useEffect } from "react";
import { Dropdown, Space } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, MenuWrapper, Section, SelectAnt } from "./style";
import { Input, Button } from "../Generic";
import { Icons } from "../../utils/icons";
import { uzeReplace } from "../../hooks/useReplace/useReplace";
import useSearch from "../../hooks/useSearch/useSearch";

const { REACT_APP_BASE_URL: url, REACT_APP_CLIENT_TOKEN: token } = process.env;

const Filter = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("Select Category");
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipCodeRef = useRef();
  const roomsRef = useRef();
  const maxPriceRef = useRef();
  const minPriceRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  useEffect(() => {
    fetch(`${url}/categories/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setUsers(res?.data || []))
      .catch(err => {
        setUsers([])
        return err;
      });
  }, []);

  useEffect(() => {
    let [res] = users?.filter(
      (info) => info.id === Number(query.get("category_id"))
    );
    res?.name && setValue(res?.name);
    !query.get("category_id") && setValue("Select Category");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.search, users]);

  const onChange = ({ target: { value, name } }) => {
    navigate(`${location.pathname}${uzeReplace(name, value)}`);
  };

  const onChangeCategory = (category_id) => {
    navigate(`/properties${uzeReplace("category_id", category_id)}`);
  };
  const onChangeSort = (sort) => {
    navigate(`/properties${uzeReplace("sort", sort)}`);
  };
  return (
    <Container>
      <Input
        type={"text"}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        id="filter"
        label={<Icons.Houses />}
      />

      <Dropdown
        trigger={["click"]}
        dropdownRender={() => {
          return (
            <MenuWrapper>
              <h3 className="subTitle">Address</h3>
              <Section width="100">
                <Input
                  name="country"
                  defaultValue={query.get("country")}
                  onChange={onChange}
                  ref={countryRef}
                  placeholder={"Country"}
                />
                <Input
                  name="region"
                  defaultValue={query.get("region")}
                  onChange={onChange}
                  ref={regionRef}
                  placeholder={"Region"}
                />
                <Input
                  name="city"
                  defaultValue={query.get("city")}
                  onChange={onChange}
                  ref={cityRef}
                  placeholder={"City"}
                />
                <Input
                  name="zip_code"
                  defaultValue={query.get("zip_code")}
                  onChange={onChange}
                  ref={zipCodeRef}
                  placeholder={"Zip code"}
                />
              </Section>
              <h3 className="subTitle">Apartment info</h3>
              <Section width="75">
                <Input
                  onChange={onChange}
                  name="room"
                  ref={roomsRef}
                  placeholder={"Rooms"}
                />
                <SelectAnt
                  size="large"
                  defaultValue={value}
                  onChange={onChangeSort}
                  options={[
                    { label: "Select Sort", value: "" },
                    { label: "O'suvchi", value: "asc" },
                    { label: "Kamayuvchi", value: "desc" },
                  ]}
                />
                <SelectAnt
                  size="large"
                  defaultValue={value}
                  onChange={onChangeCategory}
                  options={[
                    { label: "Select Category", value: "" },
                    ...users?.map((item) => ({
                      label: item.name,
                      value: item.id,
                    })),
                  ]}
                />
              </Section>
              <h3 className="subTitle">Price</h3>
              <Section width="50">
                <Input
                  ref={minPriceRef}
                  placeholder={"Min price"}
                  onChange={onChange}
                  name="min_price"
                />
                <Input
                  ref={maxPriceRef}
                  placeholder={"Max price"}
                  onChange={onChange}
                  name="max_price"
                />
              </Section>
            </MenuWrapper>
          );
        }}
      >
        <Space>
          <Button type={"light"}>
            <Icons.Settings /> Advanced
          </Button>
        </Space>
      </Dropdown>
      <Button type={"primary"}>
        {" "}
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
