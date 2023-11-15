import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Inregistrare from "./pages/inregistrare/Inregistrare";
import CategoryProduse from "./components/categoriiProduse/categoryProduse";
import CardProdus from "./pages/produse/Produse";
import Cart from "./pages/cart/cart";
import { ToastContainer } from "react-toastify";
import AddProduse from "./pages/Admin/addDelete/AddProduse";
import DetaliiProduse from "./pages/Admin/addDelete/DetaliiProduse";
import EditProduse from "./pages/Admin/addDelete/EditProduse";
import ListaProduse from "./pages/Admin/addDelete/ListaProduse";
import Logare from "./pages/cont/Cont";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <UserProvider>
        <Routes>
          <Route path="/lista/produse" element={<ListaProduse />}></Route>
          <Route path="/adauga/produse" element={<AddProduse />}></Route>
          <Route
            path="/produse/detalii/:productid"
            element={<DetaliiProduse />}
          ></Route>
          <Route
            path="/produse/edit/:productid"
            element={<EditProduse />}
          ></Route>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/logare" element={<Logare />} />
          <Route path="/produse" element={<CardProdus />} />
          <Route path="/produse/:category" element={<CategoryProduse />} />
          <Route path="/inregistrare" element={<Inregistrare />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
