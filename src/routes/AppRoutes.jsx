import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../errorboundary";
import { theme } from "antd";
import SettingsPage from "../pages/SettingsPage";
import NotFound from "../Components/NotFound";
function AppRoutes() {
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ErrorBoundary
              fallback={
                <h1 style={{ color: token.colorText }}>
                  There is a Error in the HomePage Component
                </h1>
              }
            >
              <HomePage />
            </ErrorBoundary>
          }
        ></Route>
        <Route exact path="/settings" element={<SettingsPage />}></Route>
        <Route exact path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
