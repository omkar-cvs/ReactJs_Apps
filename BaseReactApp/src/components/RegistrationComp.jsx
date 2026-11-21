import React, { useState } from "react";

const RegistrationComp = () => {
  const USER_INITIAL_DATA = {
    id: "",
    name: "",
    designation: "",
  };
  const [formData, setFormData] = useState(USER_INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("Test the input name: ", e.target.name);
    // console.log("Test the input value: ", e.target.value);

    setIsSubmitted(false);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Form Submitted successfully");
    console.log(formData);
    setFormData(USER_INITIAL_DATA);
  };

  const handleReset = () => {
    setFormData(USER_INITIAL_DATA);
  };
  return (
    <>
      <h3>Welcome to Registration form</h3>
      {isSubmitted && (
        <p style={{ color: "green" }}>Form submitted successfully!</p>
      )}
      <form onSubmit={handleSubmit}>
        <label>Id:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
        <br />
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label>Designation:</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegistrationComp;
