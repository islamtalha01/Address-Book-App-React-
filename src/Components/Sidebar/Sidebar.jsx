import React from "react";
import { Menu } from "antd";
import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { Routes, Route, useNavigate } from "react-router-dom";

// Import useNavigate from react-router-dom
const Sidebar = () => {
    const navigate = useNavigate(); // Move useNavigate inside the functional component
     
  return (
    <div>
      <Menu
        onClick={({ key }) => {
          navigate(key);
          console.log(key); // Now you can use the navigate function inside the onClick handler
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
     
    </div>
  );
};

  
export default Sidebar;
