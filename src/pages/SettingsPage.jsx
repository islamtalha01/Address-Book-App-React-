import AppHeader from "../components/AppHeader";
import Sidebar from "../components/Sidebar";
import { Row } from "antd";
import NationalitySelectorContainer from "../containers/NationalitySelectorContainer";
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
