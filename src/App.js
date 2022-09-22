// Routing 
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components Importing
import { Navbar, Footer } from "./components";
// Pages Importing 
import { Home, Cart, OrderHistory, Contact, Admin } from "./pages";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
// Toaster 
import { ToastContainer } from "react-toastify";
import ProductDetails from "./pages/ProductDetails";




function App() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path="/FantastK_Ecommerce/" element={<Home />} />
        <Route path="/FantastK_Ecommerce/contact" element={<Contact />} />
        <Route path="/FantastK_Ecommerce/register" element={<Register />} />
        <Route path="/FantastK_Ecommerce/login" element={<Login />} />
        <Route path="/FantastK_Ecommerce/reset" element={<Reset />} />
        <Route path="/FantastK_Ecommerce/cart" element={<Cart />} />
        <Route path="/FantastK_Ecommerce/orders" element={<OrderHistory />} />
        <Route path="/FantastK_Ecommerce/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
