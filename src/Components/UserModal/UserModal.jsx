import {Modal} from "antd"
import React from "react"
function UserModal ({modalData,isModalOpen,handleCancel,handleOk})
{
    
   return(

      
       <Modal data-testid="modal-1"
       title="Additional Info"
       open={isModalOpen}
       onOk={handleOk}
       onCancel={handleCancel}
     >
       {modalData.element && <div>
       <p>Street: {`${modalData.element.location.street.name} ${modalData.element.location.street.number}` }</p>
       <p>Postal Code: {modalData.element.location.postcode}</p>
       <p>State: {modalData.element.location.state}</p> 
       
       <p>Phone: {modalData.element.phone}</p>
       <p>Cell: {modalData.element.cell}</p>
       <p>Nationality: {modalData.element.nat}</p>
       </div>}
     </Modal>
   )
}
export default UserModal         