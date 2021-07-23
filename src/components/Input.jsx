import React from "react";

export default function Input(props) {
  const {
    isdark,
    darkTheme,
    lightTheme,
    ismodalopen,
    searchVal,
    setSearchVal,
    selectVal,
    setSelectVal,
  } = props;

  return (
    <>
      <div
        style={{ display: ismodalopen ? "none" : "flex" }}
        className="input-container container"
      >
        <div className="input-div">
          <span
            style={isdark ? darkTheme : lightTheme}
            className="fas fa-search"
          ></span>
          <input
            style={isdark ? darkTheme : lightTheme}
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            type="text"
            name="country"
            id="country"
            placeholder="Search a country..."
          />
        </div>
        <select
          style={isdark ? darkTheme : lightTheme}
          name="region"
          id="region"
          value={selectVal}
          onChange={(e) => setSelectVal(e.target.value)}
        >
          <option value="none">Fliter by region</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  );
}
