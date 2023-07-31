import Header from "../Header";
import Sidebar from "../Sidebar";
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

import { Select, Space } from 'antd';
const { Option } = Select;
const SettingPage=()=>
{
    const {setSelectedNationality } = useContext(AppContext);
    const handleChange = (value)=> {
        console.log(`selected ${value}`)
        setSelectedNationality(value)
        
        ;
      };

     
return(
    <>
    
    <div style={{display:"flex",flexDirection:'row',width:"100vw",height:"100vh"}}>
    <Sidebar/>
   


  <Select
    mode="multiple"
    style={{
      width: '20%', height:'fit-content'
    }}
    placeholder="select one country"
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="CH" label="China">
      <Space>
       
        China 
      </Space>
    </Option>
    <Option value="ES" label="Spain">
      <Space>
        
        Spain
      </Space>
    </Option>
    <Option value="GB" label="GreatBritain">
      <Space>
        
        Great Britain
      </Space>
    </Option>
    <Option value="FR" label="France">
      <Space>
        
       France
      </Space>
    </Option>
  </Select>
{/* 
    <div>

       {<p>Hello and Hi from Settings Component</p>}
    </div> */}
    </div>
    
    </>
    
)


}

export default SettingPage