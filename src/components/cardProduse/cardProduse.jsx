import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./cardProduse.css";
import DetaliiProdus from "../detaliiProdus/detaliiProdus";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

export default function CardProduse({ product }) {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleDetailsClick = () => {
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <Card className="card">
      <Card.Img variant="top" src={product.img} className="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{product.name}</Card.Title>
        <Card.Text className="card-text">Pret: {product.price} Lei</Card.Text>
        <Card.Text className="card-text">Descriere: {product.desc}</Card.Text>
        <button className="details-button" onClick={handleDetailsClick}>
          Detalii
        </button>
        <Button
          variant="primary"
          className="add-to-cart-button"
          onClick={handleClick}
        >
          Adauga in cos <FaShoppingCart />
        </Button>
        <Modal show={showDetails} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detalii produs</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DetaliiProdus product={product} />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
}
