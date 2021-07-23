import React from "react";

const darkTheme = {
  backgroundColor: "hsl(209, 23%, 22%)",
  color: "white",
};

const lightTheme = {
  backgroundColor: "white",
  color: "hsl(200, 15%, 8%)",
};

export default function CountryModal(props) {
  const {
    ismodalopen,
    setIsmodalopen,
    ismymodalopen,
    setIsmymodalopen,
    isdark,
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

  function goBack() {
    setIsmodalopen(!ismodalopen);
    setIsmymodalopen(!ismymodalopen);
  }

  return (
    <>
      <div
        style={{ display: ismymodalopen ? "block" : "none" }}
        className="modal-container"
      >
        <div className="container">
          <button
            style={isdark ? darkTheme : lightTheme}
            onClick={goBack}
            className="back-btn btn-default"
          >
            <span className="fas fa-long-arrow-alt-left"></span> Back
          </button>
          <div className="modal-content">
            <div className=" img-col">
              <img src={flag} alt="img" />
            </div>
            <div className=" info-col">
              <p
                style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}
                className="country-name"
              >
                {name}
              </p>
              <div className="details-container">
                <div className="details-col1">
                  <p
                    style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}
                    className="property"
                  >
                    Native Name :<span className="value"> {nativeName}</span>
                  </p>
                  <p
                    style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}
                    className="property"
                  >
                    Population :<span className="value"> {population}</span>
                  </p>
                  <p
                    style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}
                    className="property"
                  >
                    Region :<span className="value"> {region}</span>
                  </p>
                  <p
                    style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}
                    className="property"
                  >
                    Sub Region :<span className="value"> {subRegion}</span>
                  </p>
                  <p
                    style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}
                    className="property"
                  >
                    Capital :<span className="value"> {capital}</span>
                  </p>
                </div>
                <div className="details-col2">
                  <p
                    style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}
                    className="property"
                  >
                    Top Level Domain :
                    <span className="value"> {topLevelDomain}</span>
                  </p>
                  <p
                    style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}
                    className="property"
                  >
                    Currencies :<span className="value"> {currencies}</span>
                  </p>
                  <p
                    style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}
                    className="property"
                  >
                    Languages :<span className="value"> {languages}</span>
                  </p>
                </div>
              </div>
              <div className="borders-info">
                <span style={{ color: isdark ? "white" : "hsl(200, 15%, 8%)" }}>
                  Border Countries
                </span>
                <div className="info-btns">
                  {bordersArr.map((border, index) => {
                    return (
                      <button
                        key={index}
                        style={isdark ? darkTheme : lightTheme}
                        className="btn-default"
                      >
                        {border}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
