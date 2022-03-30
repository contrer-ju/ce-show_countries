import { useParams, Link, useNavigate } from "react-router-dom";

export default function Detail({ darkMode, countriesData }) {
  let numberFormat = new Intl.NumberFormat("en-US");
  let { selectedCca3 } = useParams();
  let history = useNavigate();
  
  return (
    <div className={darkMode ? "darkModeBackground" : "lightModeBackground"}>
      <div className="LayoutDetail">
        <span
          onClick={() => history(-1)}
          className={
            darkMode
              ? "paddingBorderElement noTextDecoration alingSeflItemLayoutDetail cursorPointer darkModeElements"
              : "paddingBorderElement noTextDecoration alingSeflItemLayoutDetail cursorPointer lightModeElements"
          }
        >
          {"\u21fd Back"}
        </span>
        {countriesData
          .filter((country) => country.cca3 === selectedCca3)
          .map((selectedCountry, index) => (
            <div key={index} className="countryDetailsFlexBox">
              <img
                src={selectedCountry.flags.png}
                alt="Country Flag"
                className="flagDetailSize"
              />
              <div>
                <span className="homeTitleText boldText">
                  {selectedCountry.name.common}
                </span>
                <div className="countryBorderFlexBox">
                  <div className="countryInsideFlexBox">
                    <span className="detailText boldText">
                      Native Name:{" "}
                      <span className="noBoldText">
                        {Object.values(selectedCountry.name.nativeName)
                          .map((names) => names.common)
                          .join(", ")}
                      </span>
                    </span>
                    <span className="detailText boldText">
                      Population:{" "}
                      <span className="noBoldText">
                        {numberFormat.format(selectedCountry.population) +
                          " hab."}
                      </span>
                    </span>
                    <span className="detailText boldText">
                      Region:{" "}
                      <span className="noBoldText">
                        {selectedCountry.region}
                      </span>
                    </span>
                    <span className="detailText boldText">
                      Sub Region:{" "}
                      <span className="noBoldText">
                        {selectedCountry.subregion}
                      </span>
                    </span>
                    <span className="detailText boldText">
                      Capital:{" "}
                      <span className="noBoldText">
                        {selectedCountry.capital === undefined
                          ? "N/A"
                          : selectedCountry.capital.join(", ")}
                      </span>
                    </span>
                  </div>
                  <div className="countryInsideFlexBox">
                    <span className="detailText boldText">
                      Top Level Domain:{" "}
                      <span className="noBoldText">
                        {selectedCountry.tld[0]}
                      </span>
                    </span>
                    <span className="detailText boldText">
                      Currencies:{" "}
                      <span className="noBoldText">
                        {Object.values(selectedCountry.currencies)[0].name}
                      </span>
                    </span>
                    <span className="detailText boldText">
                      Languages:{" "}
                      <span className="noBoldText">
                        {Object.values(selectedCountry.languages).join(", ")}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="borderFlexBox">
                  <span className="homeText boldText">Border Countries: </span>
                  <div className="borderElementsFlexBox">
                    {selectedCountry.hasOwnProperty("borders") &&
                      countriesData
                        .filter((countriesList) =>
                          selectedCountry.borders.includes(countriesList.cca3)
                        )
                        .map((borderCountries, index) => (
                          <Link
                            to={"/" + borderCountries.cca3}
                            key={index}
                            className={
                              darkMode
                                ? "paddingBorderElement noTextDecoration darkModeElements"
                                : "paddingBorderElement noTextDecoration lightModeElements"
                            }
                          >
                            {borderCountries.name.common + " "}
                          </Link>
                        ))}
                    {!selectedCountry.hasOwnProperty("borders") && (
                      <span
                        className={
                          darkMode
                            ? "paddingBorderElement darkModeElements"
                            : "paddingBorderElement lightModeElements"
                        }
                      >
                        doesn't have
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        {countriesData.filter((country) => country.cca3 === selectedCca3)
          .length === 0 && (
          <div className="notFoundFlexBox">
            <span className="homeText boldText">
              This page is missing or your assembled the link incorrectly.
            </span>
            <span className="homeText boldText">
              Please go to the home page.
            </span>
            <Link
              to="/"
              className={
                darkMode
                  ? "marginTop paddingBorderElement noTextDecoration darkModeElements"
                  : "marginTop paddingBorderElement noTextDecoration lightModeElements"
              }
            >
              Go Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
