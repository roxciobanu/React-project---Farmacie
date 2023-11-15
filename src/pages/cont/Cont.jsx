import React, { useState } from "react";
import {
  LoginSignup,
  LoginSignupContainer,
  LoginSignupFields,
  LoginSignupLogin,
} from "./Cont.style";
import {  Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbarGeneral/Navbar";
import { ruteAdmin } from "../../constants/rute";
import { useUser } from "../../context/UserContext";


const Logare = () => {
  const { loginUser } = useUser();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = loginUser(username, password, email);

    if (user) {
  
      console.log("Logat cu succes!");
    } else {
  
      console.log("Logarea a esuat!");
    }
  };

 

  return (
    <div style={{marginBottom: "100px"}}>
      <Navbar
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh08bXLyLsFE5x5_r_YpDsBIhhPqAalqD7ZA&usqp=CAU"
        rute={ruteAdmin}
      />
      <form onClick={handleSubmit}>
      <LoginSignup>
        <LoginSignupContainer>
          <h1
            style={{
              margin: "20px 0px",
            }}
          >
          Bine ai revenit!
          </h1>
          <LoginSignupFields>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                height: "72px",
                width: "100%",
                paddingLeft: "20px",
                border: "1px solid #c9c9c9",
                outline: "none",
                color: "#5c5c5c",
                fontSize: "18px",
              }}
              type="text"
              placeholder="Numele tau"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                height: "72px",
                width: "100%",
                paddingLeft: "20px",
                border: "1px solid #c9c9c9",
                outline: "none",
                color: "#5c5c5c",
                fontSize: "18px",
              }}
              type="email"
              placeholder="Adresa de email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                height: "72px",
                width: "100%",
                paddingLeft: "20px",
                border: "1px solid #c9c9c9",
                outline: "none",
                color: "#5c5c5c",
                fontSize: "18px",
              }}
              type="password"
              placeholder="Parola"
            />
          </LoginSignupFields>
          <Button type="submit"
            style={{
              width: "460px",
              height: "72px",
              color: "white",
              background: "#ff4141",
              marginTop: "30px",
              border: "none",
              fontSize: "500",
              cursor: "pointer",
            }}
          >
            Continua
          </Button>
          <LoginSignupLogin>
            Membru nou?{" "}
            <Link
              to={"/inregistrare"}
              style={{
                color: "#ff4141",
                fontWeight: "#600",
                decoration: "none",
              }}
            >
              Inregistreaza-te aici
            </Link>
          </LoginSignupLogin>
        </LoginSignupContainer>
      </LoginSignup>
      </form>
    </div>
  );
};

export default Logare;
