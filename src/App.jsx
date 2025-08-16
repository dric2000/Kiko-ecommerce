import { Route, Routes } from "react-router-dom";
import Login from "./assets/components/LoginForm/Login";
import ProducDetails from "./assets/pages/ProductDetails";
import Products from "./assets/pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} index={true} />
      <Route path="/products" element={<Products />} />
      <Route path="/productDetails/:id" element={<ProducDetails />} />
    </Routes>
  );
}

export default App;
