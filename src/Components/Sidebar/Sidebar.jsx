import React from "react";
import { Menu } from "antd";
import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Menu
        style={{ height: "100%" }}
        onClick={({ key }) => {
          navigate(key);
        }}
        items={[
          {
            label: "Home",
            key: "/",
            icon: <HomeOutlined />,
          },
          {
            label: "Settings",
            key: "/settings",
            icon: <SettingOutlined />,
          },
        ]}
      ></Menu>
    </>
  );
};

export default Sidebar;
