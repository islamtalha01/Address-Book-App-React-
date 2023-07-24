import { ConfigProvider,Layout,Switch,theme } from "antd";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import styletokens from './tokens/styletokens.json';
import * as lightTheme from "./ant-tokens/light.json";
import * as darkTheme from "./ant-tokens/dark.json";
import { useState } from "react";
function App() {
    const [dark, setDark] = useState(false);
	const handleChecked=(checked)=>
	{
	 
	  if (checked) setDark(true);
		  else setDark(false);
	}


  return (
    <ConfigProvider
      theme={{
        algorithm: dark ? theme.darkAlgorithm : theme.lightAlgorithm,
        // token: styletokens,
      }}
    >
		<Switch
						checkedChildren="Light"
						unCheckedChildren="Dark"
						onChange={handleChecked}
					/>
		<Layout
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					
				}}
			>
        
        <Header />
        <HomePage />
      
			</Layout>
      
    </ConfigProvider>
  );
}
export default App;
