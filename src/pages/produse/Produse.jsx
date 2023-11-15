import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { CardsContainer } from "./Produse.style";
import Search from "../../components/search/Search";
import { SubNavBar } from "../../components/subNavbar/subNavbar";
import CardProduse from "../../components/cardProduse/cardProduse";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbarGeneral/Navbar";
import { ruteAdmin } from "../../constants/rute";
import Footer from "../../components/footer/Footer";

const CardProdus = () => {
  const [produse, setProduse] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  useEffect(() => {
    fetch(`http://localhost:3005/produse`)
      .then((response) => response.json())
      .then((produse) => {
        setProduse(produse);
        setSearchResults(produse);
      });
  }, []);

  return (
    <>
      <Navbar
        logo="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh08bXLyLsFE5x5_r_YpDsBIhhPqAalqD7ZA&usqp=CAU"
        rute={ruteAdmin}
      />
      <SubNavBar />
      <Search
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        produse={produse}
      ></Search>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        Toate Produsele
      </h3>
      <CardsContainer>
        {searchResults.map((product) => (
          <CardProduse key={product.id} product={product} />
        ))}
      </CardsContainer>
      <Footer />
    </>
  );
};

export default CardProdus;
