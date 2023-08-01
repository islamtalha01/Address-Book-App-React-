import { ConfigProvider, Layout, Row, Switch, theme, Space } from "antd";
import AppHeader from "./Components/Header";
import HomePage from "./Components/HomePage";
import styletokens from "./tokens/styletokens.json";
import * as lightTheme from "./ant-tokens/light.json";
import * as darkTheme from "./ant-tokens/dark.json";
import { useState } from "react";
import { AppProvider } from './AppContext';


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
        // algorithm: dark ? theme.darkAlgorithm : theme.lightAlgorithm,
		token: dark ? darkTheme : lightTheme,
        // token: styletokens,
      }}
    >
      <Space direction="vertical" size={10}>
        <Layout
          style={{
            display: "flex",
       
          }}
        >
          <Row justify="end" style={{  padding: "10px" }}>
            <Switch
              checkedChildren="Light"
              unCheckedChildren="Dark"
              onChange={handleChecked}
            />
          </Row>
          <AppHeader />
          <HomePage />
        </Layout>
      </Space>
    </ConfigProvider>
	</AppProvider>
    
  );
}
export default App;
