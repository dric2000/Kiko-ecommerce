const ProductItemDetails = ({ image, price, description, name, category }) => {
  return (
    <div className="flex flex-col gap-10 p-5">
      <div>
        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto md:h-150 object-cover rounded-md "
            src={image}
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <span className="text-gray-300">{category}</span>
            <h1 className="text-3xl font-bold"> {name} </h1>
          </div>
          <div className="border-b-2 border-[#FFC8BE] w-20"></div>
          <div className="w-full md:w-150 flex flex-col gap-15">
            <h1 className="text-2xl font-bold"> {price} </h1>
            <p className="text-[20px] ">{description}</p>
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl ">Tailles disponibles</h2>
              <div className="flex gap-3 items-center">
                <button className="border border-[#FFC8BE] w-20 h-8 text-xl font-bold">
                  45
                </button>
                <button className="border border-[#FFC8BE] w-20 h-8 text-xl font-bold">
                  39
                </button>
                <button className="border border-[#FFC8BE] w-20 h-8 text-xl font-bold">
                  30
                </button>
              </div>
            </div>
            <div>
              <button className="bg-[#FFC8BE] w-80 h-10 text-black font-bold text-2xl rounded-md justify-center items-center ">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemDetails;
