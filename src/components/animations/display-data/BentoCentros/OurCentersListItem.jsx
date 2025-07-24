export default function OurCentersListItem({ href, center, address, brand }) {
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
    <a
      href={href}
      target="_blank"
      className="px-6 py-4 border border-theme-gray rounded-2xl flex justify-between w-full cursor-pointer hover:bg-theme-gray/20 transition-colors duration-200"
    >
      <div>
        <p className="text-xl">{center}</p>
        <p className="text-font-gray text-xs">{address}</p>
      </div>

      <div
        className={`px-2 py-1 rounded-full flex items-center justify-center self-start ${getBrandBgColor(
          brand
        )}`}
      >
        <p className="text-font-white capitalize w-20 text-center">{brand}</p>
      </div>
    </a>
  );
}
