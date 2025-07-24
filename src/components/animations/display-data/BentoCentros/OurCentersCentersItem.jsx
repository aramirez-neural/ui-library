export default function OurCentersCentersItem({
  city,
  count,
  onClick,
  active,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={count == 0}
      className={`px-6 py-4 border border-theme-gray rounded-2xl flex justify-between w-full cursor-pointer hover:bg-theme-gray/20 transition-colors duration-200 ${
        active ? "bg-theme-gray/10" : ""
      } ${count == 0 ? "opacity-50 pointer-events-none" : ""}`}
    >
      <p className="capitalize">{city}</p>
      <p>{count}</p>
    </button>
  );
}
