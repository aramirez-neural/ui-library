export default function OurCentersBrandsButton({ brand, onClick, active }) {
  const getBrandBgColor = (brand) => {
    switch (brand) {
      case "intensive":
        return "bg-[#72d3c9]";
      case "kids":
        return "bg-[#efac3e]";
      case "mentalia":
        return "bg-[#000000]";
      default:
        return "bg-theme-gray";
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-x-2 cursor-pointer w-full px-2 rounded hover:bg-theme-gray/20 transition-colors duration-200 ${
        active ? "bg-theme-gray/10" : ""
      }`}
    >
      <div className={`h-4 w-4 rounded-full ${getBrandBgColor(brand)}`}></div>
      <p className="text-lg capitalize">{brand}</p>
    </button>
  );
}
