import React from "react";
import noimg from "../../assets/images/noimg.jpg";
import {
  AntTabel,
  Container,
  Content,
  Wrapper,
  Icons,
  Image,
  ForSale,
  Featured,
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../Generic";
import { useQuery } from "react-query";
import { useRequet } from "./../../hooks/useRequest";
import { message } from "antd";

const MyProperties = () => {
  // const [users, setUsers] = useState();
  const navigate = useNavigate();
  const request = useRequet();
  const { search } = useLocation();

  const { data, refetch } = useQuery([search], () => {
    return request({ url: "/houses/me", token: true });
  });

  const onDelete = (event, id) => {
    event.stopPropagation();
    request({ url: `/houses/${id}`, token: true, method: "DELETE" }).then(
      (res) => {
        if (res?.success) {
          message.info("Successfully deleted");
          refetch();
        }
      }
    ).then(err => {
      message.info("Server vaqtinchalik ishlamayapdi");
      return err;
    });
  };
  return (
    <Container>
      <Wrapper>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 className="title">My properties</h3>
          <Button
            style={{ color: "green" }}
            type="primary"
            onClick={() => navigate("/my-properties/newhouse")}
          >
            Add house
          </Button>
        </div>
        <AntTabel>
          <thead className="thead">
            <AntTabel.Tr>
              <AntTabel.Th className="listing-title">Listing Title</AntTabel.Th>
              <AntTabel.Th className="data-published">Year build</AntTabel.Th>
              <AntTabel.Th className="status">Status</AntTabel.Th>
              <AntTabel.Th className="view">View</AntTabel.Th>
              <AntTabel.Th className="action">Action</AntTabel.Th>
            </AntTabel.Tr>
          </thead>
          <tbody className="tbody">
            {data?.data &&
              data.data.map(
                ({
                  houseDetails: { yearBuilt },
                  attachments,
                  country,
                  region,
                  city,
                  price,
                  salePrice,
                  description,
                  user: { email },
                  id,
                }) => {
                  return (
                    <AntTabel.Tr
                      key={id}
                      onClick={() => {
                        navigate(`/properties/${id}`);
                      }}
                    >
                      <AntTabel.Td className="listing-title">
                        <Content>
                          <Image
                            src={
                              (attachments && attachments[0]?.imgPath) || noimg
                            }
                            alt="rasm-uy"
                          />
                          <Featured>Featured</Featured>
                        </Content>
                        <Content column="true">
                          <div>
                            <div style={{ display: "flex" }}>
                              <div className="subTitle">
                                {description || "New Apartment Nice Wiew "}
                              </div>
                              <ForSale>FOR SALE</ForSale>
                            </div>
                            <div className="info">
                              {`${city}, ${region}, ${country}` ||
                                "Quincy St, Brooklyn, NY, USA"}
                            </div>
                          </div>
                          <div>
                            <Content.PriceSale>
                              {`$${price}/mo` || "$7,500/mo"}
                            </Content.PriceSale>
                            <div className="subTitle">
                              {`$${salePrice}/mo` || "$2,800/mo"}
                            </div>
                          </div>
                        </Content>
                      </AntTabel.Td>
                      <AntTabel.Td className="data-published">
                        {yearBuilt || "30 December 2022"}
                      </AntTabel.Td>
                      <AntTabel.Td className="status">
                        {email || "test@gmail.com"}
                      </AntTabel.Td>
                      <AntTabel.Td className="view">5933</AntTabel.Td>
                      <AntTabel.Td className="action">
                        <Icons.Edit
                          onClick={(event) => {
                            navigate(`/my-properties/edithouse/${id}`);
                            event.stopPropagation();
                          }}
                        />
                        <Icons.Delete
                          onClick={(event) => onDelete(event, id)}
                        />
                      </AntTabel.Td>
                    </AntTabel.Tr>
                  );
                }
              )}
          </tbody>
        </AntTabel>
      </Wrapper>
    </Container>
  );
};

export default MyProperties;
