import React from "react";

const DetaliiProdus = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Pret: {product.price} Lei</p>
      <p>Descriere: {product.desc}</p>
    </div>
  );
};

export default DetaliiProdus;