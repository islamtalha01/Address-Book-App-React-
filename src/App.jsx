import { ConfigProvider, Layout, Row, Switch, theme, Space } from "antd";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import styletokens from "./tokens/styletokens.json";
import * as lightTheme from "./ant-tokens/light.json";
import * as darkTheme from "./ant-tokens/dark.json";
import { useState } from "react";
function App() {
  const [dark, setDark] = useState(false);
  const handleChecked = (checked) => {
    if (checked) setDark(true);
    else setDark(false);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: dark ? theme.darkAlgorithm : theme.lightAlgorithm,
        // token: styletokens,
      }}
    >
      <Space direction="vertical" size={10}>
        <Layout
          style={{
            display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <Row style={{ justifyContent: "end", padding: "10px" }}>
            <Switch
              checkedChildren="Light"
              unCheckedChildren="Dark"
              onChange={handleChecked}
            />
          </Row>
          <Header />
          <HomePage />
        </Layout>
      </Space>
    </ConfigProvider>
  );
}
export default App;
