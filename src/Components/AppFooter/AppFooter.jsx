import { Footer } from "antd/es/layout/layout";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
function AppFooter(){

  const {endOfUsers } = useContext(AppContext);

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
