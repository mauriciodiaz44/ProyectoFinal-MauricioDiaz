import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Contacto from "./pages/Contacto";
import Ayuda from "./pages/Ayuda";
import Carrito from "./pages/Carrito";
import Header from "./components/Layouts/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/login" Component={Login} />
        <Route path="/contacto" Component={Contacto} />
        <Route path="/ayuda" Component={Ayuda} />
        <Route path="/cart" Component={Carrito} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
