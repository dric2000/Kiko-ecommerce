import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ProductList from "../components/ProductsList/ProductList";

const Products = ({ numberOfProducts, handleAddProduct }) => {
  const location = useLocation();
  const userName = location.state.name;
  return (
    <div className="flex flex-col gap-10 p-5 md:p-10 min-h-screen">
      <Navbar userName={userName} numberOfProducts={numberOfProducts} />
      <ProductList
        numberOfProducts={numberOfProducts}
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default Products;
