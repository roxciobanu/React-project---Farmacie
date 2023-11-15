import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../constants/breakpoints";

export const CartContainer = styled.div``;

export const CartWrapper = styled.div`
  padding: 20px;
  ${BREAKPOINT_MOBILE({ padding: "20px" })};
`;

export const CartTitle = styled.h1`
  font-weight: 500;
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
padding: 10px;
font-weight: 100;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) =>
  props.type === "filled" ? "green" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
`;

export const TopContent = styled.div`
  padding: 12px;
  font-weight: 500;
  cursor: pointer;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #218838;
  }
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
  font-weight: 500;
  font-size: 16px;
  ${BREAKPOINT_MOBILE({ display: "none" })};
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductInfoCart = styled.div`
  flex: 3;
`;

export const CartProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const ProductImage = styled.img`
  width: 120px;
  border-radius: 5px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.div`
  flex: 1;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ProductId = styled.span`
  flex: 1;
  font-size: 14px;
  color: #6c757d;
`;

export const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CartProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  font-weight: 600;
  color: #333;
`;

export const ProductPrice = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #333;
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin: 20px 0;
`;

export const Summary = styled.div`
  flex: 1;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  height: 70vh;
  background-color: #f1f6f1;
`;

export const SummaryTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const SummaryItems = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => (props.type === "total" ? "600" : "500")};
  font-size: ${(props) => (props.type === "total" ? "24px" : "18px")};
  color: ${(props) => (props.type === "total" ? "#333" : "#6c757d")};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;



