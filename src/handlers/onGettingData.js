import axios from "axios";
import { apiURL } from "../constant/baseURL";

export default async function onGettingFilmsList(
  setApiErrorStatus,
  setIsLoadingData,
  setCountriesData
) {
  setIsLoadingData(true);
  try {
    const response = await axios.get(apiURL);
    setCountriesData(response.data);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingData(false);
  }
}
