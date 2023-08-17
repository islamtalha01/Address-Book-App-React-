import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import NationalitySelector from "../components/NationalitySelector";

const NationalitySelectorContainer = () => {
  const navigate = useNavigate();
  const { setSelectedNationality } = useContext(AppContext);
  
  const handleChange = (value) => {
    setSelectedNationality(value);
    navigate("/");
  };

  const nationalityList = [
    {
      value: "CH",
      label: "China",
      content: "China",
    },
    {
      value: "ES",
      label: "Spain",
      content: "Spain",
    },
    {
      value: "GB",
      label: "GreatBritain",
      content: "Great Britain",
    },
    {
      value: "FR",
      label: "France",
      content: "France",
    },
  ];
  return (
    <>
      <NationalitySelector
        nationalityList={nationalityList}
        handleChange={handleChange}
      />
    </>
  );
};

export default NationalitySelectorContainer;
