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
    <div className="flex flex-col relative rounded-md w-90 p-5 shadow-xl/20 bg-gray-600">
      <div>
        <div>
          <img src={image} className="w-full h-70 object-cover rounded-md" />
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
    </div>
  );
};

export default ProductItem;
