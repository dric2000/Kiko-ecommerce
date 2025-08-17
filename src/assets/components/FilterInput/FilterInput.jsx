const FilterInput = ({
  searchProductName,
  handleSearchChange,
  searchCategory,
  handleCategoryChange,
  categories,
  availibilities,
  searchAvailibility,
  handleAvailibilityChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 mt-5">
      <h2 className="text-xl md:text-2xl whitespace-nowrap">Filtrer par :</h2>
      <input
        type="text"
        value={searchProductName}
        onChange={handleSearchChange}
        placeholder="Nom de produit"
        className="w-90 h-10 md:w-60 rounded-md pl-2 border-2 bg-gray-800 border-[#FFC8BE] focus:outline-none focus:border-[#FF9B87]"
      />

      <select
        value={searchCategory}
        onChange={handleCategoryChange}
        className="w-90 h-10 md:w-60 rounded-md pl-2 border-2 bg-gray-800 border-[#FFC8BE] focus:outline-none focus:border-[#FF9B87]"
      >
        <option value="">Catégories</option>
        {categories.map((category, index) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </select>

      <select
        value={searchAvailibility}
        onChange={handleAvailibilityChange}
        className="w-90 h-10 md:w-60 rounded-md pl-2 border-2 bg-gray-800 border-[#FFC8BE] focus:outline-none focus:border-[#FF9B87]"
      >
        <option value="">Disponibilités</option>
        {availibilities.map((available, index) => (
          <option value={available} key={index}>
            {available}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterInput;
