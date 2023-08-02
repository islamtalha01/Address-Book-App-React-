import React from 'react';
import { Spin } from 'antd';
import "./style.css";
const Loading = () => (
  <div className="example">
    <Spin  size="large" />
  </div>
);
export default Loading;