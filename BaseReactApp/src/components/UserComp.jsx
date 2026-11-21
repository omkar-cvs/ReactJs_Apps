import { useState } from "react";
import { getUsers, saveUser } from "../services/userService";

const UserComp = () => {
  const USER_DATA_INITIAL = {
    name: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState({
    name: "omkar", // default value
    email: "omkar@gmail.com",
    password: "1234",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnChange = (e) => {
    // console.log("handleOnChange clicked \n", e);
    // console.log("e.target : \n", e.target);
    // console.log("Name : ", name);
    //  console.log("value : ", value);

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("handleSubmit clicked");
    //const userFetchedData = getUsers();
    const savedUserData = saveUser(formData);
    console.log("savedUserData : ", savedUserData);

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData(USER_DATA_INITIAL);
    setIsSubmitted(false);
  };
  return (
    <>
      <h3>Welcome user reg page</h3>
      {isSubmitted && (
        <p style={{ color: "green" }}>Form submitted successfully!</p>
      )}
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
          placeholder="Enter your name"
        />
        <br />
        <label>Email Id: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder="Enter your email id"
        />
        <br />
        <label>Pasword: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
          placeholder="Enter your password"
        />
        <br />

        <button type="submit">Register</button>
        <button type="button" onClick={handleReset}>
          Clear
        </button>
      </form>
    </>
  );
};

export default UserComp;
