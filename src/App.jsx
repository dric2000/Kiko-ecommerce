import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./assets/components/LoginForm/Login";
import ProducDetails from "./assets/pages/ProductDetails";
import Products from "./assets/pages/Products";

function App() {
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const handleAddProduct = () => {
    setNumberOfProducts((prev) => prev + 1);
    console.log(numberOfProducts);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={<Login numberOfProducts={numberOfProducts} />}
        index={true}
      />
      <Route
        path="/products"
        element={
          <Products
            numberOfProducts={numberOfProducts}
            handleAddProduct={handleAddProduct}
          />
        }
      />
      <Route
        path="/productDetails/:id"
        element={
          <ProducDetails
            numberOfProducts={numberOfProducts}
            handleAddProduct={handleAddProduct}
          />
        }
      />
    </Routes>
  );
}

export default App;
