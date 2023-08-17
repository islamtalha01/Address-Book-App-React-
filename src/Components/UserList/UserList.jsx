import { Card, Button, Avatar, Row, Col, theme } from "antd";
const { useToken } = theme;
function UserList({ usersData, filterData, showModal }) {
  const { Meta } = Card;
  const { token } = useToken();

  return (
    <>
      <Row
        gutter={[10, 10]}
        style={{ marginLeft: "0px", marginRight: "2.5px" }}
      >
        {usersData &&
          filterData().length > 0 &&
          filterData().map((item, index) => (
            <Col
              key={index}
              xs={token.sizeMD}
              sm={token.sizeMS}
              md={token.sizeSM}
              lg={token.sizeXS}
              xl={token.sizeXXS}
            >
              <Card
                hoverable
                bodyStyle={{ minHeight: "250px" }}
                actions={[
                  <Button
                    type="primary"
                    onClick={() => {
                      showModal(item, index);
                    }}
                  >
                    {" "}
                    More Info
                  </Button>,
                ]}
              >
                <Meta
                  style={{
                    display: "block",
                  }}
                  title={item.name?.first + " " + item.name?.last}
                  avatar={<Avatar src={item.picture?.thumbnail} />}
                  description={
                    <>
                     <p>index:{index}</p>
                      <p>Email: {item.email}</p>

                      <p>Username : {item.login?.username} </p>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
}

export default UserList;




