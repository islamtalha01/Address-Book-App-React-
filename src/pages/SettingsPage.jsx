import AppHeader from "../Components/AppHeader";
import Sidebar from "../Components/Sidebar";
import { Row } from 'antd';
import NationalitySelectorContainer from "../Components/containers/NationalitySelectorContainer";

const SettingsPage=()=>
{
   
return(
    <>
    <Row style={{flexDirection:'column',minHeight: "100vh"}}>
    <AppHeader/>
    <Row style={{height:"100vh"}}>
    <Sidebar/>
     <NationalitySelectorContainer/>
    </Row>
   

      </Row>
    </>
    
)


}

export default SettingsPage