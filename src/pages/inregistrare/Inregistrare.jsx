import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbarGeneral/Navbar";
import { ruteAdmin } from "../../constants/rute";
import "./Inregistrare.css";


const Inregistrare = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/');
  };

  return (
    <div>
      <Navbar
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh08bXLyLsFE5x5_r_YpDsBIhhPqAalqD7ZA&usqp=CAU"
        rute={ruteAdmin}
      />
      <div className="registration-container">
        <h1>Inregistreaza-te!</h1>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header"></div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Nume</label>
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control"
                      placeholder="Introdu prenumele"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Introdu adresa de email"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Parola</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Introdu parola"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Inregistreaza-te
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inregistrare;
