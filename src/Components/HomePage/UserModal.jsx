 import {Modal} from "antd"
 function UserModal ({modaldata,isModalOpen,handleCancel,handleOk})
 {
    console.log(modaldata)
    return(


        <Modal
        title="Additional Info"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       
        <p>Street: {modaldata.street}</p>
        <p>City: {modaldata.city}</p>
        <p>Postal Code: {modaldata.postCode}</p>
        <p>State: {modaldata.state}</p>
        <p>Phone: {modaldata.phone}</p>
        <p>Cell: {modaldata.cell}</p>
        <p>Nationality: {modaldata.nat}</p>
      </Modal>
    )
 }
export default UserModal         