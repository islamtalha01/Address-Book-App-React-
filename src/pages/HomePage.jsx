
import { Row } from "antd"
import UserListContainer from "../Components/containers/UserListContainer"
import AppFooter from "../Components/Footer"



function HomePage()
{

return(
<Row style={{ flexDirection: "column", minHeight: "100vh" }}>
          <AppHeader />
          {/* <UserListContainer/> */}



         <Row>
          <Row>
            <Col span={3}>
              <Sidebar />
            </Col>
            <Col span={21}>
              
           <UserListContainer/>
           </Col>
          </Row>
          <Loading searchText={searchText} loading={loading}/>
  
          <div
            ref={elementRef}
            style={{
              display: "flex",
              textAlign: "center",
              height: "10",
              marginTop: "auto ",
            }}
          ></div>
          </Row>
          <AppFooter/>
</Row>
)

}



export default HomePage