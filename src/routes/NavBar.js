export default function NavBar({ darkMode, toggleThemeMode }) {
  return (
    <div className={darkMode ? "darkModeNavBar" : "lightModeNavBar"}>
      <div
        className={
          darkMode ? "navBar darkModeElements" : "navBar lightModeElements"
        }
      >
        <span className="boldText navBarTitleText">Where in the world?</span>
        <span className="cursorPointer" onClick={() => toggleThemeMode()}>
          {darkMode && (
            <>
              <i className="fa fa-sun-o"></i>
              <span className="navBarText">Light Mode</span>
            </>
          )}
          {!darkMode && (
            <>
              <i className="fa fa-moon-o"></i>
              <span className="navBarText">Dark Mode</span>
            </>
          )}
        </span>
      </div>
    </div>
  );
}
