import { useEffect } from "react";
import { Link } from "react-router-dom";
import onGettingData from "../handlers/onGettingData";

export default function Home({
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
}) {
  useEffect(() => {
    if (!apiErrorStatus && countriesData.length === 0)
      onGettingData(setApiErrorStatus, setIsLoadingData, setCountriesData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let numberFormat = new Intl.NumberFormat("en-US");

  return (
    <div className={darkMode ? "darkModeBackground" : "lightModeBackground"}>
      <div className="LayoutHome">
        {(isLoadingData || countriesData.length === 0) && (
          <i className="fa fa-spinner fa-spin spinnerSize marginTop"></i>
        )}
        {!isLoadingData && countriesData.length !== 0 && (
          <>
            <div className="controlsFlexBox">
              <div className="paddingSearchBox">
                <input
                  className={
                    darkMode
                      ? "controlsText darkModeElements"
                      : "controlsText lightModeElements"
                  }
                  type="search"
                  placeholder="Search for a Country..."
                  onChange={(event) =>
                    setLowerCaseOfSearchInput(event.target.value)
                  }
                />
              </div>
              <div className="paddingSelectBox">
                <select
                  className={
                    darkMode
                      ? "controlsText darkModeElements"
                      : "controlsText lightModeElements"
                  }
                  value={regionSelect}
                  onChange={(event) => setRegionSelect(event.target.value)}
                >
                  <option value="">Filter by Region</option>
                  <option value="Africa">Africa</option>
                  <option value="Americas">Americas</option>
                  <option value="Antarctic">Antarctic</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </div>
            </div>
            <div className="countriesFlexBox">
              {countriesData
                .filter((country) =>
                  country.name.common.toLowerCase().includes(searchInput)
                )
                .filter((countryBy) => countryBy.region.includes(regionSelect))
                .map((filteredCountry, index) => (
                  <div
                    key={index}
                    className={
                      darkMode ? "darkModeElements" : "lightModeElements"
                    }
                  >
                    <Link to={"/" + filteredCountry.cca3}>
                      <img
                        src={filteredCountry.flags.png}
                        alt="Country Flag"
                        className="flagSize"
                      />
                    </Link>
                    <div className="countriesInfo">
                      <span className="homeTitleText boldText">
                        {filteredCountry.name.common}
                      </span>
                      <span className="detailText boldText">
                        Population:{" "}
                        <span className="noBoldText">
                          {numberFormat.format(filteredCountry.population) +
                            " hab."}
                        </span>
                      </span>
                      <span className="detailText boldText">
                        Region:{" "}
                        <span className="noBoldText">
                          {filteredCountry.region}
                        </span>
                      </span>
                      <span className="detailText boldText">
                        Capital:{" "}
                        <span className="noBoldText">
                          {filteredCountry.capital === undefined
                            ? "N/A"
                            : filteredCountry.capital.join(", ")}
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
