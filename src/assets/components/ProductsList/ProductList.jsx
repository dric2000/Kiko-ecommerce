import { useState } from "react";
import productsData from "../../../productsData.json";
import FilterInput from "../FilterInput/FilterInput";
import ProductItem from "../ProductItem/ProductItem.jsx";

const ProductList = ({ handleAddProduct }) => {
  const categories = ["Tops", "Pants", "Dresses", "Outerwear", "Skirts"];
  const availibilities = ["IN_STOCK", "OUT_OF_STOCK"];
  const [searchProductName, setSearchProductName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchAvailibility, setSearchAvailibility] = useState("");
  const handleSearchChange = (e) => {
    setSearchProductName(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setSearchCategory(e.target.value);
  };
  const handleAvailibilityChange = (e) => {
    setSearchAvailibility(e.target.value);
  };

  let filteredProducts = productsData.products;

  if (searchProductName) {
    filteredProducts = productsData.products.filter((product) =>
      product.name.toLowerCase().includes(searchProductName.toLowerCase())
    );
  } else if (searchCategory) {
    filteredProducts = productsData.products.filter(
      (product) =>
        product.category.toLowerCase() === searchCategory.toLowerCase()
    );
  } else if (searchAvailibility) {
    filteredProducts = productsData.products.filter(
      (product) =>
        product.availability.toLowerCase() === searchAvailibility.toLowerCase()
    );
  }

  return (
    <div className="flex flex-col gap-6 md:gap-10 w-full">
      <h1 className="text-2xl md:text-3xl font-bold ">Liste des produits</h1>
      <FilterInput
        searchProductNamme={searchProductName}
        handleSearchChange={handleSearchChange}
        searchCategory={searchCategory}
        handleCategoryChange={handleCategoryChange}
        categories={categories}
        availibilities={availibilities}
        searchAvailibility={searchAvailibility}
        handleAvailibilityChange={handleAvailibilityChange}
      />
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          {filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              nom={product.name}
              category={product.category}
              price={product.price}
              description={product.description}
              availability={product.availability}
              stars={product.stars}
              image={product.image_url}
              handleAddProduct={handleAddProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
