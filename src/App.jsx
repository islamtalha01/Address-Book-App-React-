import { ConfigProvider, Layout, Row, Switch, theme, Space } from "antd";
import HomePage from "./Components/HomePage";
import * as lightTheme from "./ant-tokens/light.json";
import * as darkTheme from "./ant-tokens/dark.json";
import { useState } from "react";
import { AppProvider } from "./AppContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import SettingPage from "./Components/SettingsPage";
function App() {
  const [dark, setDark] = useState(false);
  const handleChecked = (checked) => {
    if (checked) setDark(true);
    else setDark(false);
  };

  return (
    <AppProvider>
      <ConfigProvider
        theme={{
          token: dark ? darkTheme : lightTheme,
        }}
      >
        {/* <Space direction="vertical" size={20}> */}
          <Layout
            style={{
              display: "flex",	
			  width:"100vw",height:"auto"
            }}
          >
            <Row justify="end" style={{ padding: "10px" }}>
              <Switch
                checkedChildren="Light"
                unCheckedChildren="Dark"
                onChange={handleChecked}
              />
            </Row>
            <Content />
          </Layout>
        {/* </Space> */}
      </ConfigProvider>
    </AppProvider>
  );
}
function Content() {
  return (
    <div>
      <Routes>
        <Route eaxct path="/" element={<HomePage />}></Route>
        <Route eaxct path="/settings" element={<SettingPage />}></Route>
      </Routes>
    </div>
  );
}
export default App;
