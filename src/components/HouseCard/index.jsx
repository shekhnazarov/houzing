import React, { useContext } from "react";
import { Container, Image, Content, Icons, Line, Wrapper } from "./style";
import noimg from "../../assets/images/noimg.jpg";
import { PropertiesContext } from "../../context/Properties";
import { message } from "antd";

const HouseCard = ({ info = {}, onClick }) => {
  const [{ refetch }] = useContext(PropertiesContext);
  const {
    houseDetails,
    attachments,
    country,
    region,
    city,
    price,
    salePrice,
    description,
    category,
    rooms,
    favorite,
    id,
  } = info;

  const addFavourite = (event) => {
    event.stopPropagation();
    fetch(
      `http://localhost:8080/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (!favorite) message.success("Successfully liked");
        else message.warning("Succesfully disliked");
        refetch && refetch();
      }).catch(err =>  console.log(err));
  };
  return (
    <Container onClick={onClick}>
      <Container.Header>
        <Image src={(attachments && attachments[0].imgPath) || noimg} />
      </Container.Header>
      <Container.Main>
        <div className="subTitle inline">
          {description || "New Apartment Nice Wiew "}
        </div>
        <h4 className="info pt-1">
          {`${city}, ${region}, ${country}` ||
            "Quincy St, Brooklyn, NY, USA" -
              `${category?.name}``${rooms || 0}-rooms`}
        </h4>
        <Content>
          <Content.Item>
            <Icons.Bed />
            <h4 className="info">Beds {houseDetails?.beds || 0}</h4>
          </Content.Item>
          <Content.Item>
            <Icons.Bath />
            <h4 className="info">Baths {houseDetails?.bath || 0}</h4>
          </Content.Item>
          <Content.Item>
            <Icons.Car />
            <h4 className="info">Garage {houseDetails?.garage || 0}</h4>
          </Content.Item>
          <Content.Item>
            <Icons.Ruler />
            <h4 className="info">{houseDetails?.area || 0} Sq Ft</h4>
          </Content.Item>
        </Content>
      </Container.Main>
      <Line />
      <Container.Footer>
        <Wrapper>
          <h5 className="beforePrice text-left line-through">
            {`$${price}/mo` || "$7,500/mo"}
          </h5>
          <h4 className="subTitle ">{`$${salePrice}/mo` || "$2,800/mo"}</h4>
        </Wrapper>
        <Wrapper flex="true">
          <Icons.Resize />
          <Icons.Love favorite={favorite || ""} onClick={addFavourite} />
        </Wrapper>
      </Container.Footer>
    </Container>
  );
};

export default HouseCard;
