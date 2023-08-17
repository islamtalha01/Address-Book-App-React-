import { Card, Button, Avatar, Row, Col, theme } from "antd";
import inLineStyles from "../../inLineStyles";
function UserList({ filteredUsersData, showModal }) {
  const { Meta } = Card;

  const { styles,cx } = inLineStyles();
  return (
    <>
      <Row
        className={styles.usersListContainer}
        gutter={[10, 10]}
      >
        {filteredUsersData &&
          filteredUsersData.length > 0 &&
          filteredUsersData.map((item, index) => (
            <Col
              key={index}
              xs={styles.sizeMD}
              sm={styles.sizeMS}
              md={styles.sizeSM}
              lg={styles.sizeXS}
              xl={styles.sizeXXS}
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
                    More Info
                  </Button>,
                ]}
              >
                <Meta
                  className={styles.cardMeta}
                  title={`${item.name?.title} ${item.name?.first} ${item.name?.last}`}
                  avatar={<Avatar src={item.picture?.thumbnail} />}
                  description={
                    <>
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
