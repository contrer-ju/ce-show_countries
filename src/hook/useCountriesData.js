import { useState } from "react";

const useCountriesData = () => {
  const [countriesData, setCountriesData] = useState([]);

  return {
    countriesData,
    setCountriesData,
  };
};

export default useCountriesData;
