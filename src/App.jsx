import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Contacto from "./pages/Contacto";
import Ayuda from "./pages/Ayuda";
import Carrito from "./pages/Carrito";
import Checkout from "./pages/Checkout";

function App() {
  return (
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
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
