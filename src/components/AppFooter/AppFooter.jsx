import { Footer } from "antd/es/layout/layout";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import inLineStyles from "../../inLineStyles";
function AppFooter(){
  const { styles } = inLineStyles()
  const {endOfUsers } = useContext(AppContext);

return(
    endOfUsers && (
        <Footer
         className={styles.appFooter}
        >
          End of Users
        </Footer>
      )
)

}


export default AppFooter
