import React from "react";
import {
  AmountContainer,
  Bottom,
  CartContainer,
  CartProduct,
  CartProductAmount,
  CartTitle,
  CartWrapper,
  Details,
  Hr,
  PriceDetails,
  ProductDetail,
  ProductId,
  ProductImage,
  ProductInfoCart,
  ProductName,
  ProductPrice,
  Summary,
  SummaryItemPrice,
  SummaryItemText,
  SummaryItems,
  SummaryTitle,
  Top,
  TopButton,
  TopContent,
  TopText,
} from "./cart.style";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbarGeneral/Navbar";
import { ruteAdmin } from "../../constants/rute";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";




const REACT_APP_STRIPE="pk_test_51OBkEdCaqIQe5GFL7RSCYOWNd93ZUo8MgdJnP6uxqgCrlUkp5UkVqYbmCSkIh5hRsKTI3VFXlwdv018kFxXMevWp00tqOsn4rH"

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState("");
  
  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);

  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }


  return (
    <>
      <Navbar
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh08bXLyLsFE5x5_r_YpDsBIhhPqAalqD7ZA&usqp=CAU"
        rute={ruteAdmin}
      />
      <CartContainer>
        <CartWrapper>
          <CartTitle>Cosul tau</CartTitle>
          <Top>
          <Link to="/produse">
            <TopButton>Continua cumparaturile</TopButton>
            </Link>
            <TopContent>
              <TopText>Cos de cumparaturi(2)</TopText>
            </TopContent>

          </Top>
          <Bottom>
            <ProductInfoCart>
             
           
              <CartProduct>
            
                <ProductDetail>
                  <ProductImage src="https://www.catena.ro/assets/uploads/product_images/thumbs/037d0-assista-supozitoare_copii-800x800_215x215.jpg"></ProductImage>
                  <Details>
                    <ProductName>
                      <b>Produs:</b>Paracetamol
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>2435678
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetails>
                  <AmountContainer>
                    <AddIcon onClick={()=>handleQuantity("increase")}></AddIcon>
                    <CartProductAmount>{quantity}</CartProductAmount>
                    <RemoveIcon onClick={()=>handleQuantity("decrease")}></RemoveIcon>
                  </AmountContainer>
                
                  <ProductPrice>30 ron</ProductPrice>
                </PriceDetails>
              </CartProduct>
             
            </ProductInfoCart>
            <Summary>
              <SummaryTitle>Produsele tale</SummaryTitle>
              <SummaryItems>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>60 ron</SummaryItemPrice>
              </SummaryItems>

              <SummaryItems>
                <SummaryItemText>Curier</SummaryItemText>
                <SummaryItemPrice>50 ron</SummaryItemPrice>
              </SummaryItems>

              <SummaryItems>
                <SummaryItemText>Reducere la livrare</SummaryItemText>
                <SummaryItemPrice>-20 ron</SummaryItemPrice>
              </SummaryItems>

              <SummaryItems type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice> 90 ron</SummaryItemPrice>
              </SummaryItems>

              <StripeCheckout
                name="PharmaPlant"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh08bXLyLsFE5x5_r_YpDsBIhhPqAalqD7ZA&usqp=CAU"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
             
                amount={cart.total*10}
                token={onToken}
                stripeKey={REACT_APP_STRIPE} >
              </StripeCheckout>
             
            </Summary>
          </Bottom>
        </CartWrapper>
      </CartContainer>
      <Footer />
    </>
  );
};

export default Cart;
