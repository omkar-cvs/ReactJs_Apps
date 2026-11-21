import { useState } from "react";

import "./App.css";
import RegistrationComp from "./components/RegistrationComp";
import UserComp from "./components/UserComp.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <>
      <h2>Welcome to React App </h2>
      {/* <RegistrationComp /> */}
      {/* <UserComp /> */}
      <Login />
    </>
  );
}

export default App;
