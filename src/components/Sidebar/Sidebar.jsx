import React from "react";
import { Menu } from "antd";
import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import inLineStyles from "../../inLineStyles";
const Sidebar = () => {
  const navigate = useNavigate();
  const {styles}=inLineStyles()
  return (
    <>
      <Menu
        className={styles.sidebarMenu}
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
