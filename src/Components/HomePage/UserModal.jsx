 import {Modal} from "antd"
 function UserModal ({modalData,isModalOpen,handleCancel,handleOk})
 {
  // if (!modalData) {
  //   // Handle the case when modalData is not available
  //   return null; // or you can return a loading indicator or some message
  // }
  // console.log(modalData)
  // const { city, state, postcode } = modalData.location;
 
    return(

       
        <Modal
        title="Additional Info"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalData.location && <div>
        <p>Street: {`${modalData.location.street.name} ${modalData.location.street.number}` }</p>
        <p>Postal Code: {modalData.location.postcode}</p>
        <p>State: {modalData.location.state}</p> 
        </div> }
        <p>Phone: {modalData.phone}</p>
        <p>Cell: {modalData.cell}</p>
        <p>Nationality: {modalData.nat}</p>
      </Modal>
    )
 }
export default UserModal         