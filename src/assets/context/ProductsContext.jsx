import { createContext, useState } from "react";
import initialProducts from "../../productsData.json";

const defaultProducts = initialProducts.products;

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(
    Array.isArray(defaultProducts) ? defaultProducts : []
  );

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
