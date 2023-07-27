
import { Menu } from "antd";
import {HomeOutlined,SettingOutlined} from "@ant-design/icons/lib/icons"
import { useNavigate } from "react-router-dom";


function Sidebar(){
//  const navigate=useNavigate()


return(

<div>
<Menu 
        //    onClick={({key})=>{
        //     navigate(key)

        //    }}
items={[
    {
    label:"Home",key:"/",icon:<HomeOutlined/>
},
{
    label:"Settings",key:'/Settings',icon:<SettingOutlined />
}, 

]}>

    
</Menu>



</div>

)

}


export default Sidebar