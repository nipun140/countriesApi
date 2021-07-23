import React, { useState } from "react";
import CountryModal from "./CountryModal";

export default function CountryCard(props) {
  const {
    isdark,
    ismodalopen,
    setIsmodalopen,
    flag,
    name,
    population,
    region,
    capital,
    nativeName,
    subRegion,
    topLevelDomain,
    currencies,
    languages,
    bordersArr,
  } = props;
  const [ismymodalopen, setIsmymodalopen] = useState(false);

  function toggleModal() {
    setIsmodalopen(!ismodalopen);
    setIsmymodalopen(!ismymodalopen);
  }

  return (
    <>
      <div
        style={{
          backgroundColor: isdark ? "hsl(209, 23%, 22%)" : "white",
          display: ismodalopen ? "none" : "flex",
        }}
        onClick={toggleModal}
        className="country-card"
      >
        <div className="image-container">
          <img src={flag} alt="img" />
        </div>
        <div className="card-text">
          <p
            style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}
            className="country-name"
          >
            {name}
          </p>
          <p
            style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}
            className="property"
          >
            Population:
            <span className="value">{population}</span>
          </p>
          <p
            style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}
            className="property"
          >
            Region:
            <span className="value">{region}</span>
          </p>
          <p
            style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}
            className="property"
          >
            Capital:
            <span className="value">{capital}</span>
          </p>
        </div>
      </div>

      <CountryModal
        ismodalopen={ismodalopen}
        setIsmodalopen={setIsmodalopen}
        ismymodalopen={ismymodalopen}
        setIsmymodalopen={setIsmymodalopen}
        isdark={isdark}
        flag={flag}
        name={name}
        population={population}
        region={region}
        capital={capital}
        nativeName={nativeName}
        subRegion={subRegion}
        topLevelDomain={topLevelDomain}
        currencies={currencies}
        languages={languages}
        bordersArr={bordersArr}
      />
    </>
  );
}
