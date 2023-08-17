import { Footer } from "antd/es/layout/layout";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import useStyles from "../../hooks/useStyles";
function AppFooter(){
  const { styles } = useStyles();
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
