import React from "react";

export default function Navbar(props) {
  const { isdark, setIsdark, darkTheme, lightTheme } = props;

  function toggleDarkMode() {
    setIsdark((prevVal) => {
      return !prevVal;
    });
  }

  return (
    <>
      <header style={isdark ? darkTheme : lightTheme}>
        <div className="container">
          <p className="logo">where in the world?</p>
          <p onClick={toggleDarkMode} className="color-mode">
            <span
              className={`${isdark ? "fas fa-moon" : "far fa-moon"}`}
            ></span>
            Dark Mode
          </p>
        </div>
      </header>
    </>
  );
}
