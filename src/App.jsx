import { ConfigProvider, Layout, Row, Switch, theme, Space } from "antd";
import HomePage from "./Components/HomePage";
import * as lightTheme from "./ant-tokens/light.json";
import * as darkTheme from "./ant-tokens/dark.json";
import { useState } from "react";
import { AppProvider } from "./AppContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import ErrorBoundary from "./errorboundary";
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
       
          <Layout
            style={{
              display: "flex",	
			        minHeight:"100vh" //min-height will 
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
       
      </ConfigProvider>
    </AppProvider>
  );
}
function Content() {
  const { useToken } = theme;
  const {token}=useToken()
  return (
      <div>

      
       <Routes>
        <Route exact path="/" element={ <ErrorBoundary fallback={<h1 style={{color:token.colorText}}> "There is a Error in the HomePage Component"</h1>}><HomePage /></ErrorBoundary>}></Route>
        <Route exact path="/settings" element={<SettingPage />}></Route>
      </Routes>
      </div>
      
      
         
      
     
    
    
     
  );
}
export default App;
