import { useState } from "react";
import { loginUser } from "../services/userService";

const Login = () => {
  const USER_INITIAL_DATA = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(USER_INITIAL_DATA);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    console.log("handleChange() clicked!");
    const { name, value } = e.target;

    console.log("Name : ", name);
    console.log("Value : ", value);

    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setLoggedIn(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit() clicked!");
    setFormData(formData);

    const isValid = await loginUser(formData);

    console.log("---------------------");
    console.log("isValide: ", isValid);

    if (isValid) {
      console.log("Valide User ");
      setLoggedIn(true);
    } else {
      console.log("Please Enter correct credential ");
      setLoggedIn(false);
    }
  };

  return (
    <>
      <p>Welcome Long Page</p>
      {isLoggedIn ? (
        <p style={{ color: "green" }}>Login Success</p>
      ) : (
        <p style={{ color: "red" }}>Email or Password incorrect</p>
      )}

      <form onSubmit={handleSubmit}>
        <label>User Name / Eail Id: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email Id"
          onChange={handleChange}
        />
        <br />
        <label>Enter Passowrd: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
