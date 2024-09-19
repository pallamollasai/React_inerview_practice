import React, { useState } from "react";
export default function SignInForm() {
  const [formData, setFormData] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    country: { value: "", error: "" },
    cities: { values: [], error: "" },
    gender: { value: "", error: "" },
    groups: { value: [], error: "" },
  });

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        email: { value: e.target.value, error: "" },
      };
    });
  };

  const handleCountryChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        country: { value: e.target.value, error: "" },
      };
    });
  };

  const handleCitiesChange = (e) => {
    const values = [...e.target.selectedOptions].map((option) => option.value);
    console.log("values are ", values);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        cities: { values: values, error: "" },
      };
    });
  };

  const handleGenderChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        gender: { value: e.target.value, error: "" },
      };
    });
  };

  const handleGroupChange = (e) => {
    const value = e.target.value;
    console.log("value is ", value);
    let filteredValues = [];
    if (formData.groups.value.includes(value)) {
      filteredValues = formData.groups.value.filter((group) => group !== value);
    } else {
      filteredValues = [...formData.groups.value, value];
    }
    console.log("filtered values are ", filteredValues);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        groups: { value: filteredValues, error: "" },
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={handleEmailChange}
            value={formData.email.value}
          />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <select
            id="country"
            value={formData.country.value}
            onChange={handleCountryChange}
          >
            <option value="ind">Ind</option>
            <option value="USA">Usa</option>
            <option value="Eng">England</option>
          </select>
        </div>

        <div>
          <label htmlFor="cities">Cities</label>
          <select
            id="cities"
            multiple={true}
            value={formData.cities.length ? formData.cities.values : []}
            onChange={handleCitiesChange}
          >
            <option value="hyd">Hyd</option>
            <option value="Blr">Blr</option>
          </select>
        </div>

        <div>
          <label htmlFor="male">Male</label>
          <input
            id="male"
            name="gender"
            type="radio"
            value="male"
            onChange={handleGenderChange}
          />

          <label htmlFor="female">Femail</label>
          <input
            id="female"
            name="gender"
            type="radio"
            value="female"
            onChange={handleGenderChange}
          />
        </div>

        <div>
          <label htmlFor="science">Science</label>
          <input
            id="science"
            type="checkbox"
            value="science"
            onChange={handleGroupChange}
          />

          <label htmlFor="mpc">MPC</label>
          <input
            id="mpc"
            type="checkbox"
            value="mpc"
            onChange={handleGroupChange}
          />
        </div>
      </form>
      <p>
        {/* Selected options are {formData.email} -- {formData.country} --{" "} */}
        {/* {formData.cities[0]} */}
        values are -- {formData.email.value} -- {formData.country.value} --{" "}
        {formData.cities.values[0]} -- {formData.gender.value}
      </p>
    </>
  );
}
