import HomePageMock from "../pages/HomePageMock";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../errorboundary";
import { theme } from "antd";
function AppRoutes()
{

    const { useToken } = theme;
    const { token } = useToken();
    return (
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ErrorBoundary
              fallback={
                <h1 style={{ color: token.colorText }}>
                  {" "}
                  "There is a Error in the HomePageMock Component"
                </h1>
              }
            >
              <HomePageMock/>
            </ErrorBoundary>
          }
        ></Route>
       
      </Routes>
    );


}

export default AppRoutes





//  {/* <Route exact path="/settings" element={<SettingPage />}></Route> */}
//         {/* <Route exact path="*" element={<NotFound />}>
//           {" "}
//         </Route> */}