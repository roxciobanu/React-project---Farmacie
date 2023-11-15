
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const apiUrl = "http://localhost:3005/users";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Eroare la incarcarea userilor:", error));
  }, []);

  const registerUser = async (user) => {
    console.log("Inregistreaza user", user);
    const apiUrl = "http://localhost:3005/users";
    
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const newUser = await response.json();
      console.log("User nou inregistrat:", newUser);

      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (error) {
      console.error("Eroare la inregistrare:", error);
    }
  };

  const loginUser = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);
    return user;
  };

  return (
    <UserContext.Provider value={{ users, registerUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
