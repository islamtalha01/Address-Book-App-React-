import { ConfigProvider } from "antd";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import styletokens from './tokens/styletokens.json';

function App() {
  return (
    <ConfigProvider
      theme={{
        // algorithm: dark ? theme.darkAlgorithm : theme.lightAlgorithm,
        token: styletokens,
      }}
    >
      <>
        <Header />
        <HomePage />
      </>
    </ConfigProvider>
  );
}
export default App;
