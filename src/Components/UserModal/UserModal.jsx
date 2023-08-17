import { Modal } from "antd";
import React from "react";
function UserModal({ modalData, isModalOpen, handleCancel, handleOk }) {
  return (
    <Modal
      data-testid="modal-1"
      title="Additional Info"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      { modalData?.name && (
        <div>
          <p>
            Street:{" "}
            {`${modalData.location.street.name} ${modalData.location.street.number}`}
          </p>
          <p>Postal Code: {modalData.location.postcode}</p>
          <p>State: {modalData.location.state}</p>

          <p>Phone: {modalData.phone}</p>
          <p>Cell: {modalData.cell}</p>
          <p>Nationality: {modalData.nat}</p>
        </div>
      )}
    </Modal>
  );
}
export default UserModal;
