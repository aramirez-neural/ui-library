import OurCentersBrandsButton from "./OurCentersBrandsButton";

export default function OurCentersBrands({ selectedBrand, setSelectedBrand }) {
  const brands = ["intensive", "kids", "mentalia"];

  const handleClick = (brand) => {
    setSelectedBrand(selectedBrand === brand ? null : brand);
  };

  return (
    <div className="border border-theme-gray rounded-2xl shadow p-6 w-sm space-y-2">
      <h3 className="text-2xl">Nuestras Marcas</h3>

      {brands.map((brand) => (
        <OurCentersBrandsButton
          key={brand}
          brand={brand}
          active={selectedBrand === brand}
          onClick={() => handleClick(brand)}
        />
      ))}
    </div>
  );
}
