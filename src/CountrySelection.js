import React, { useState, useEffect, useRef } from "react";

const countries = [
  {
    name: "India",
    cities: ["Hyder", "Blr", "Kochi"],
  },
  {
    name: "USA",
    cities: ["Venezula", "Alaska", "Markram"],
  },
  {
    name: "UK",
    cities: ["Barhimd", "London", "Tkrr"],
  },
];
export default function CountrySelection() {
  const [country, setCountry] = useState({});
  const [cities, setCities] = useState([]);

  const handleCountryChange = (e) => {
    const value = e.target.value;
    const countrySelected = countries.filter(
      (country) => country.name === value,
    );
    console.log("country selected is ", countrySelected[0].name);
    setCountry({ ...countrySelected });
    setCities([...countrySelected[0].cities]);
  };

  return (
    <>
      <div>
        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={country ? country.name : ""}
          onChange={(e) => handleCountryChange(e)}
        >
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="city">City</label>
        <select id="city" value={cities ? cities[0] : ""}>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
