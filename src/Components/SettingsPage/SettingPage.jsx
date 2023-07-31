import Header from "../Header";
import Sidebar from "../Sidebar";
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom'; 
import { Select, Space } from 'antd';
const { Option } = Select;
const SettingPage=()=>
{
    const navigate=useNavigate()
    const {setSelectedNationality } = useContext(AppContext);
    const handleChange = (value)=> {
        console.log(`selected ${value}`)
        setSelectedNationality(value)
        navigate("/")
        
        ;
      };

     
return(
    <>
    <Header/>
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

    </div>
    
    </>
    
)


}

export default SettingPage