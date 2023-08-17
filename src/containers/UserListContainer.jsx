import React, { useContext,useEffect } from "react";
import { AppContext } from "../AppContext";
import { useState } from "react";
import UserModal from "../components/UserModal";
import useDataFetch from "../hooks/useDataFetch";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Loading from "../components/Loading";
import UserList from "../components/UserList";
function UserListContainer() {
  const { searchText, elementRef } = useContext(AppContext);
  const {Intersecting}=useInfiniteScroll(elementRef);
  const { usersData, loading,getUsersData } = useDataFetch(50);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
 

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
  const filteredUsersData = usersData.filter((item) => {
      const fullName = `${item.name?.first} ${item.name?.last}`;
        return fullName.toLowerCase().includes(searchText.toLowerCase());
      });
    
  
  useEffect(() => {
    getUsersData();
  }, [Intersecting]);    
  return (
    <>
      <UserModal
        modalData={modalData}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />

      <UserList
        
        filteredUsersData={filteredUsersData}
        showModal={showModal}
      />
      <Loading searchText={searchText} loading={loading} />
    </>
  );
}
export default UserListContainer;
