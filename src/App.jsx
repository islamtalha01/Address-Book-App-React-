import { ConfigProvider, Layout, Row, Switch } from "antd";
import * as lightTheme from "./ant-tokens/light.json";
import * as darkTheme from "./ant-tokens/dark.json";
import { useState } from "react";
import { AppProvider } from "./AppContext";

import AppRoutes from "./routes/AppRoutes";
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
        <Layout
          style={{
            display: "flex",
            minHeight: "100vh",
          }}
        >
          <Row justify="end" style={{ padding: "10px" }}>
            <Switch
              checkedChildren="Light"
              unCheckedChildren="Dark"
              onChange={handleChecked}
            />
          </Row>
          <AppRoutes />
        </Layout>
      </ConfigProvider>
    </AppProvider>
  );
}

export default App;
