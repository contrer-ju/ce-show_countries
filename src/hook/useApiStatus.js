import { useState } from "react";

const useApiStatus = () => {
  const [apiErrorStatus, setApiErrorStatus] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);

  return {
    apiErrorStatus,
    setApiErrorStatus,
    isLoadingData,
    setIsLoadingData,
  };
};

export default useApiStatus;
