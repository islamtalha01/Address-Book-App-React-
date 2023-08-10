
import { Card,Button,Avatar,Row,Col,theme} from "antd";
const { useToken } = theme;
function UserList({usersData,filterData,showModal})
{
  const { Meta } = Card;
  const { token } = useToken();

render(

<>
<Row
gutter={[10, 10]}

style={{ flexWrap:'wrap' }}   //set margins to zero to eliminite the horizontal scroll
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
      // style={{ padding: "0px" }}
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
                title={item.element.name.first + " " + item.element.name.last}
                avatar={<Avatar src={item.element.picture.thumbnail} />}
                description={
                  <>
                    <p>Email: {item.element.email}</p>
    
                    <p>Username : {item.element.login.username} </p>
                  </>
                }
              />
      </Card>
    </Col>
  ))}
</Row>



</>



)

}


export default UserList


