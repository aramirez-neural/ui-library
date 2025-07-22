export default function SandwichCard({
  zIndex,
  top,
  color,
  onClick,
  isActive,
  number,
  title,
  children,
}) {
  return (
    <article
      onClick={onClick}
      style={{ zIndex, top }}
      className={`absolute transition-all duration-500 ease-in-out left-0 right-0 w-full px-2 sm:px-4 cursor-pointer rounded-2xl bg-${color} overflow-hidden`}
    >
      <div
        className={`relative transition-all duration-500 ease-in-out ${isActive ? "py-10 space-y-6" : "py-4"}`}
      >
        <p className="absolute top-5 text-font-dark-gray font-bold text-sm">
          {number}
        </p>

        <div className="ml-[20%]">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-font-white">
            {title}
          </h3>

          {isActive && (
            <div className="mt-4 text-sm sm:text-base text-font-white space-y-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
