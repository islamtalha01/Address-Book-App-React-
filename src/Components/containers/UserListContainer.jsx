import { Row, theme } from "antd";
const { useToken } = theme;
import React, { useContext, useRef } from "react";
import { AppContext } from "../../AppContext";
import { useState } from "react";
import UserModal from "../UserModal/UserModal";
import useDataFetch from "../../hooks/useDataFetch";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

function UserListContainer() {
  const { token } = useToken();

  const { searchText } = useContext(AppContext);
  const elementRef = useRef(null);

  useInfiniteScroll(elementRef);

  const { usersData, endOfUsers, loading } = useDataFetch(50);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const { isFirstRender, setFirstRender } = useState(true);

  const showModal = (data, index) => {
    setIsModalOpen(true);

    setModalData(data);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function filterData() {
    if (isFirstRender) {
      setFirstRender(false);
      return usersData; // Return the original array when dataArray is empty
    }
    const filteredData = usersData.slice(0, -50).filter((item) => {
      const fullName = `${item.element.name.first} ${item.element.name.last}`;
      return fullName.toLowerCase().includes(searchText.toLowerCase());
    });

    return filteredData;
  }

  return (
    <>
      <Row>
        <Row>
          <UserModal
            modalData={modalData}
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        </Row>
        <UserList
          usersData={usersData}
          filterData={filterData}
          showModal={showModal}
        />
      </Row>
    </>
  );
}
export default UserListContainer;
