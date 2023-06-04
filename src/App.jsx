import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Contacto from "./pages/Contacto/Contacto";
import Ayuda from "./pages/Ayuda/Ayuda";
import Carrito from "./pages/Carrito/Carrito";
import Checkout from "./pages/Checkout/Checkout";
import Error404 from "./pages/Error404/Error404";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" Component={ItemListContainer} />
            <Route path="/category/:categoryid" Component={ItemListContainer} />
            <Route path="/item/:itemid" Component={ItemDetailContainer} />
            <Route path="/signup" Component={SignUp} />
            <Route path="/login" Component={Login} />
            <Route path="/contacto" Component={Contacto} />
            <Route path="/ayuda" Component={Ayuda} />
            <Route path="/cart" Component={Carrito} />
            <Route path="/checkout" Component={Checkout} />
            <Route path="*" Component={Error404} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
