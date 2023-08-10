import { Footer } from "antd/es/layout/layout";
import useDataFetch from "../../hooks/useDataFetch";

function AppFooter(){
const {endOfUsers}=useDataFetch()


return(
    endOfUsers && (
        <Footer
          style={{
            textAlign: "center",
            color: "#fff",
            backgroundColor: "#000000",
            width: "100%",
            marginTop: "auto ",
          }}
        >
          End of Users
        </Footer>
      )
)

}


export default AppFooter
