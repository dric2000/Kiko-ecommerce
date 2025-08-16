import { useNavigate } from "react-router-dom";

const ProductItem = ({
  id,
  nom,
  category,
  image,
  price,
  stars,
  availability,
  description,
  handleAddProduct,
}) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/productDetails/${id}`, {
      state: {
        image: image,
        name: nom,
        category: category,
        price: price,
        description: description,
      },
    });
  };
  return (
    <div className="flex flex-col relative rounded-md w-90 p-5 shadow-xl/20 bg-gray-600 hover:border-4 hover:border-[#FFC8BE] transition-all duration-300 group">
      <div>
        <div>
          <img
            src={image}
            className="w-full h-70 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      {/* Description du produit */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center mt-5">
          {/* Nom, catégorie et prix */}
          <div className="flex flex-col">
            <a href="" onClick={handleClick} className="text-xl font-bold">
              {nom}
            </a>
            <span className="text-lg font-mono"> {category} </span>
          </div>
          {/* Prix du produit */}
          <div>
            <h1 className="text-xl font-bold text-[#FFC8BE]"> {price} € </h1>
          </div>
        </div>
      </div>
      {/* Nombre d'étoiles */}
      <div>
        <h2 className="text-3xl font-bold text-[#FFC8BE]">
          {" "}
          {"*".repeat(stars)}{" "}
        </h2>
      </div>
      {/* Statut de disponibilité */}
      <span
        className={`absolute bottom-0 right-0 mr-5 mb-5 ${
          availability === "IN_STOCK" ? "bg-green-200" : "bg-red-400 text-white"
        } p-2 rounded-md text-gray-700 font-bold text-sm`}
      >
        {availability}
      </span>
      <button
        className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-[[#FFC8BE]] text-white px-4 py-2 rounded-md shadow-md transition-all duration-300"
        onClick={handleAddProduct}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
          className="text-[#FFC8BE]"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      </button>
    </div>
  );
};

export default ProductItem;
