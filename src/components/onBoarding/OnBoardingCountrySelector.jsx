import NextInput from "../inputs/NextInput";
import { useRef } from "react";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const OnBoardingCountrySelector = () => {
  const checkboxRef = useRef(null);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <section className="onBoardingWrapper">
       <NextInput
          ButtonText={"Back"}
          ButtonClass={`nextButton`}
          Linked={"/signup"}
        />
      <div className="wrapper10">
        <h2>Where are you located?</h2>
       
        <Select options={options} value={value} onChange={changeHandler} />

        <form>
          <div className="acceptCondtions">
            <input
              type="checkbox"
              className="checkbox"
              id="conditions"
              name="conditions"
              ref={checkboxRef}
            />
            <label htmlFor="conditions">Share my location</label>
          </div>
        </form>
        <NextInput
          ButtonText={"CONTIUNE"}
          ButtonClass={`skipButton`}
          Linked={"/flu"}
        />
      </div>
    </section>
  );
};
export default OnBoardingCountrySelector;
