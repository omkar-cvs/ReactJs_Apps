import { USER_API } from "./api";

export const saveUser = async (formData) => {
  try {
    console.log("userService: saveUser() clicked !");

    const response = await fetch(USER_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Http error! status ${response.status}`);
    }

    const savedUser = await response.json();
    console.log("Saved user:", savedUser);
    return savedUser;
  } catch (error) {
    console.log("error saving user : ", formData);
    throw error;
  }
};
export const getUsers = async () => {
  try {
    const response = await fetch(USER_API);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    console.log("Fetched users:", users);
    return users;
  } catch (error) {
    console.log("error fetching users:", error);
    throw error;
  }
};

/*
 export const loginUser = async (formData) => {
   await new Promise((resolve) => setTimeout(resolve, 3000)); // waits 1 second
   return true;
 };
*/

export const loginUser = async (formData) => {
  const users = await getUsers();
  const foundUser = users.find((user) => {
    return user.email === formData.email && user.password === formData.password;
  });

  console.log("foundUser: ", foundUser);

  if (!foundUser) {
    localStorage.removeItem("user");
    return false;
  }

  const { password, ...safeUser } = foundUser; // avoid to store password in local storage here
  localStorage.setItem("user", JSON.stringify(safeUser));

  console.log(
    "Immediately read back from localStorage:",
    localStorage.getItem("user"),
  );

  return true;
};

/*
     const isFound = users.some(
    (user) =>
      user.email === formData.email && user.password === formData.password,
     );

    if single line above then no need to return if {} are used then need to return 
--------------------------------------------------------------------------

    Just need true / false? → Use .some().

    Need the matched user object itself? → Use .find().
  */
