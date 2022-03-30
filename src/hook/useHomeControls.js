import { useState } from "react";

const useHomeControls = () => {
  const [regionSelect, setRegionSelect] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const setLowerCaseOfSearchInput = (value) => {
    const lowerCaseSearchInput = value.toLowerCase();
    setSearchInput(lowerCaseSearchInput);
  };

  return {
    regionSelect,
    setRegionSelect,
    searchInput,
    setLowerCaseOfSearchInput,
  };
};

export default useHomeControls;
