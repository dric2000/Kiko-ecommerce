import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ProductItemDetails from "../components/ProductItemDetails/ProductItemDetails";

const ProducDetails = () => {
  const location = useLocation();
  const productImage = location.state?.image;
  const productName = location?.state.name;
  const productDescription = location?.state.description;
  const productPrice = location?.state.price;
  const productCategory = location?.state.category;
  return (
    <div className="flex flex-col gap-10 p-5 md:p-20">
      <Navbar />
      <ProductItemDetails
        image={productImage}
        name={productName}
        description={productDescription}
        price={productPrice}
        category={productCategory}
      />
    </div>
  );
};

export default ProducDetails;
