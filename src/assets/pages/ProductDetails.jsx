import Navbar from "../components/Navbar/Navbar";
import ProductItemDetails from "../components/ProductItemDetails/ProductItemDetails";

const ProducDetails = () => {
  return (
    <div className="flex flex-col gap-10 p-5 md:p-20">
      <Navbar />
      <ProductItemDetails />
    </div>
  );
};

export default ProducDetails;
