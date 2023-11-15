import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SubNavBar } from "../subNavbar/subNavbar";
import { CardsContainer } from "../../pages/produse/Produse.style";
import CardProduse from "../cardProduse/cardProduse";
import Navbar from "../navbarGeneral/Navbar";
import { ruteAdmin } from "../../constants/rute";
import Footer from "../footer/Footer";

export default function CategoryProduse() {
  const { category } = useParams();
  console.log(category);
  const [produse, setProduse] = useState([]);
  const [produseFiltrate, setProduseFiltrate] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3005/produse`)
      .then((response) => response.json())
      .then((produse) => {
        setProduse(produse);
      });
  }, []);

  useEffect(() => {
    let prod = produse.filter((el) => el.category.includes(category));
    setProduseFiltrate(prod);
  }, [category, produse]);
  return (
    <>
    <Navbar
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh08bXLyLsFE5x5_r_YpDsBIhhPqAalqD7ZA&usqp=CAU"
        rute={ruteAdmin}
      />
      <SubNavBar />
      <CardsContainer>
        {produseFiltrate?.map((product) => (
          <CardProduse key={product.id} product={product} />
        ))}
      </CardsContainer>
      <Footer />
    </>
  );
}
