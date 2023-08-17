import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useState } from "react";
import UserModal from "../UserModal/UserModal";
import useDataFetch from "../../hooks/useDataFetch";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Loading from "../Loading";
import UserList from "../UserList";
function UserListContainer() {
  const { searchText, elementRef } = useContext(AppContext);
  useInfiniteScroll(elementRef);
  const { usersData, loading } = useDataFetch(50);

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
    if (isFirstRender) { //use loading 
      setFirstRender(false);
      return usersData;
    }
    const filteredData = usersData.filter((item) => {
     
    
        const fullName = `${item.name?.first} ${item.name?.last}`;
      return fullName.toLowerCase().includes(searchText.toLowerCase());
    });

    return filteredData;
  }

  return (
    <>
      <UserModal
        modalData={modalData}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />

      <UserList
        usersData={usersData}
        filterData={filterData}
        showModal={showModal}
      />
      <Loading searchText={searchText} loading={loading} />
    </>
  );
}
export default UserListContainer;
