import React from "react";
import { theme } from "antd";

const NotFound = () => {
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: token.colorText,
      }}
    >
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
