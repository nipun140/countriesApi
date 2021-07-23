import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import CountryCard from "./components/CountryCard";
import axios from "axios";

const darkTheme = {
  backgroundColor: "hsl(209, 23%, 22%)",
  color: "white",
};

const lightTheme = {
  backgroundColor: "white",
  color: "hsl(200, 15%, 8%)",
};

const lightThemeInput = {
  backgroundColor: "white",
  color: "hsl(0, 0%, 52%)",
};

function App() {
  const [isdark, setIsdark] = useState(false);
  const [ismodalopen, setIsmodalopen] = useState(false);
  const [countriesarr, setCountriesarr] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [selectVal, setSelectVal] = useState("");

  // change in input search value
  useEffect(() => {
    let timeOutId = setTimeout(() => {
      async function getDataBySearch() {
        let res = await axios.get(
          `https://restcountries.eu/rest/v2/name/${searchVal}`
        );
        const data = res.data;
        setCountriesarr(data);
      }

      if (searchVal !== "") {
        getDataBySearch();
      }
    }, 500);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [searchVal]);

  //cahnge in selected value from options
  useEffect(() => {
    async function getDataBySelect() {
      let res = await axios.get(
        `https://restcountries.eu/rest/v2/region/${selectVal}`
      );
      const data = res.data;
      setCountriesarr(data);
    }

    if (selectVal !== "") {
      getDataBySelect();
    }
  }, [selectVal]);

  return (
    <div
      style={{
        backgroundColor: isdark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
      }}
      className="main-container"
    >
      <Navbar
        isdark={isdark}
        setIsdark={setIsdark}
        darkTheme={darkTheme}
        lightTheme={lightTheme}
      />
      <Input
        isdark={isdark}
        darkTheme={darkTheme}
        lightTheme={lightThemeInput}
        ismodalopen={ismodalopen}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        selectVal={selectVal}
        setSelectVal={setSelectVal}
      />
      <div
        style={{ display: ismodalopen ? "block" : "grid" }}
        className="countries-container container"
      >
        {countriesarr.map((countryObj, index) => {
          return (
            <CountryCard
              key={index}
              isdark={isdark}
              ismodalopen={ismodalopen}
              setIsmodalopen={setIsmodalopen}
              flag={countryObj.flag}
              name={countryObj.name}
              population={countryObj.population}
              region={countryObj.region}
              capital={countryObj.capital}
              nativeName={countryObj.nativeName}
              subRegion={countryObj.subregion}
              topLevelDomain={countryObj.topLevelDomain[0]}
              currencies={countryObj.currencies[0].name}
              languages={countryObj.languages[0].name}
              bordersArr={countryObj.borders}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
