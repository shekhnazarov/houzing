/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Input } from "../Generic";
import {
  Container,
  MenuWrapper,
  Section,
  SelectCategory,
  IconDelete,
} from "./style";
import { Checkbox } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useNavigate, useParams } from "react-router-dom";
import { useRequet } from "../../hooks/useRequest";

const { REACT_APP_BASE_URL: url } = process.env;

const MyProperties = () => {
  const [categories, setCategories] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [img, setImg] = useState("");
  const [initial, setInitial] = useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const request = useRequet();

  useEffect(() => {
    id &&
      request({ url: `/houses/id/${id}`, token: true }).then((res) => {
        setImgs(res?.data?.attachments || []);
        setInitial(res?.data || {});
      }).catch(err => {
        setImgs([]);
        setInitial([])
        return err;
      });
  }, []);

  useEffect(() => {
    fetch(`${url}/categories/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCategories(res?.data || []);
      });
  }, []);

  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,
    onSubmit: (values) => {
      fetch(id ? `${url}/houses/${id}` : `${url}/houses`, {
        method: id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ ...values, attachments: imgs }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res?.success) {
            navigate("/my-properties");
          }
        });
    },
  });

  const addImage = () => {
    if (!(imgs?.length >= 4 && img)) {
      setImgs([
        ...imgs,
        { imgPath: img, id: `${img.length * Math.random()}${img}$` },
      ]);
      setImg("");
    }
  };

  return (
    <Container>
      <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
        <MenuWrapper>
          <h3 className="subTitle">Contact Information</h3>
          <Section width="100">
            <Input
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              placeholder={"Country"}
            />
            <Input
              name="region"
              value={formik.values.region}
              onChange={formik.handleChange}
              placeholder={"Region"}
            />
            <Input
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
              placeholder={"City"}
            />
            <Input
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              placeholder={"Address"}
            />
          </Section>
          <h3 className="subTitle">Apartment info</h3>
          <Section width="100">
            <Input
              value={formik.values.houseDetails.room}
              onChange={formik.handleChange}
              name="houseDetails.room"
              placeholder={"room"}
            />
            <Input
              value={formik.values.houseDetails.bath}
              onChange={formik.handleChange}
              name="houseDetails.bath"
              placeholder={"bath"}
            />
            <Input
              value={formik.values.houseDetails.garage}
              onChange={formik.handleChange}
              name="houseDetails.garage"
              placeholder={"garage"}
            />
            <Input
              value={formik.values.houseDetails.area}
              onChange={formik.handleChange}
              name="houseDetails.area"
              placeholder={"area"}
            />
            <Input
              value={formik.values.houseDetails.beds}
              onChange={formik.handleChange}
              name="houseDetails.beds"
              placeholder={"beds"}
            />
            <Input
              value={formik.values.houseDetails.yearBuilt}
              onChange={formik.handleChange}
              name="houseDetails.yearBuilt"
              placeholder={"yearbuilt"}
            />
            <SelectCategory
              name="categoryId"
              value={formik.values.categoryId}
              onChange={formik.handleChange}
            >
              <option value="">Select Category</option>
              {categories &&
                categories?.map((v) => {
                  return (
                    <option key={v?.id} value={v?.id}>
                      {v?.name}
                    </option>
                  );
                })}
            </SelectCategory>
          </Section>
          <h3 className="subTitle">Price</h3>
          <Section width="100">
            <Input
              placeholder={"Sale price"}
              onChange={formik.handleChange}
              name="salePrice"
              value={formik.values.salePrice}
            />
            <Input
              placeholder={"Price"}
              onChange={formik.handleChange}
              name="price"
              value={formik.values.price}
            />
            <Input
              placeholder={"Zip code"}
              onChange={formik.handleChange}
              name="zipCode"
              value={formik.values.zipCode}
            />
            <Input
              placeholder={"Name"}
              onChange={formik.handleChange}
              name="name"
              value={formik.values.name}
            />
          </Section>
          <Section>
            <Input
              placeholder="Add Image Url"
              onChange={({ target: { value } }) => setImg(value)}
            />
            <Button
              onClick={addImage}
              type={"primary"}
              disabled={imgs?.length >= 4}
            >
              Add Image URL
            </Button>
          </Section>
          <Section column="true">
            {imgs.map((value, index) => {
              return (
                <pre
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    fontSize: "10px",
                    overflow: "hidden",
                  }}
                  key={index}
                >
                  {value?.imgPath}{" "}
                  <IconDelete
                    onClick={() => {
                      let res = imgs.filter((vl) => vl.id !== value.id);
                      setImgs(res);
                    }}
                  />
                </pre>
              );
            })}
          </Section>
          <Section width="100">
            <TextArea
              rows={6}
              placeholder="Description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </Section>
          <h3 className="subTitle">Additional</h3>
          <Section width="100">
            <Section column="true">
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.busStop"
              >
                Bus Stop
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.garden"
              >
                garden
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.market"
              >
                Market
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.park"
              >
                Park
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.parking"
              >
                Parking
              </Checkbox>
            </Section>

            <Section column="true">
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.school"
              >
                School
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.stadium"
              >
                Stadium
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.subway"
              >
                Subway
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.superMarket"
              >
                SuperMarket
              </Checkbox>
              <Checkbox onChange={formik.handleChange} name="componentsDto.tv">
                Tv
              </Checkbox>
            </Section>

            <Section column="true">
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.airCondition"
              >
                AirCondition
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.courtyard"
              >
                Courtyard
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.furniture"
              >
                Furniture
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.gasStove"
              >
                GasStove
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.internet"
              >
                Internet
              </Checkbox>
            </Section>
          </Section>
          <Button type="submit">{id ? "Update" : "Save"}</Button>
        </MenuWrapper>
      </form>
    </Container>
  );
};

export default MyProperties;
