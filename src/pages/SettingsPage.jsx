import AppHeader from "../Components/AppHeader";
import Sidebar from "../Components/Sidebar";
import { Row } from "antd";
import NationalitySelectorContainer from "../Containers/NationalitySelectorContainer";
import inLineStyles from "../inLineStyles";
const SettingsPage = () => {
  const {styles}=inLineStyles()
  return (
    <>
      <Row className={styles.settingsPageContainer}>
        <AppHeader />
        <Row className={styles.settingsPageContentContainer}>
          <Sidebar />
          <NationalitySelectorContainer />
        </Row>
      </Row>
    </>
  );
};

export default SettingsPage;
