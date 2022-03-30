import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./routes/NavBar";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

import useModeTheme from "./hook/useModeTheme";
import useApiStatus from "./hook/useApiStatus";
import useCountriesData from "./hook/useCountriesData";
import useHomeControls from "./hook/useHomeControls";

function App() {
  const { darkMode, toggleThemeMode } = useModeTheme();
  const { apiErrorStatus, setApiErrorStatus, isLoadingData, setIsLoadingData } =
    useApiStatus();
  const { countriesData, setCountriesData } = useCountriesData();
  const {
    regionSelect,
    setRegionSelect,
    searchInput,
    setLowerCaseOfSearchInput,
  } = useHomeControls();

  return (
    <BrowserRouter>
      <NavBar {...{ darkMode, toggleThemeMode }} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              {...{
                darkMode,
                apiErrorStatus,
                setApiErrorStatus,
                isLoadingData,
                setIsLoadingData,
                countriesData,
                setCountriesData,
                regionSelect,
                setRegionSelect,
                searchInput,
                setLowerCaseOfSearchInput,
              }}
            />
          }
        />
        <Route
          path=":selectedCca3"
          element={<Detail {...{ darkMode, countriesData }} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
