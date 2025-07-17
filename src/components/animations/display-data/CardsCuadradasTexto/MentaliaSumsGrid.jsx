import { useState, useRef, useEffect } from "preact/hooks";
import gsap from "gsap";
import mentaliaSumsData from "../../../data/mentaliaSumsData.js";

export default function MentaliaSumsGrid() {
  const [activeId, setActiveId] = useState(null);
  const cardsRef = useRef([]);
  const panelRef = useRef(null);

  const handleClick = (id) => {
    setActiveId(id === activeId ? null : id);
  };

  const activeItem = mentaliaSumsData.find((item) => item.id === activeId);

  useEffect(() => {
    if (activeItem && panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, [activeId]);

  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {mentaliaSumsData.map((item, index) => {
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => handleClick(item.id)}
              className="relative overflow-hidden rounded-2xl w-full aspect-square flex items-center justify-center cursor-pointer group"
            >
              {/* Imagen como fondo */}
              <img
                src={item.backgroundImageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Capa oscura */}
              <div
                className={`absolute inset-0 bg-theme-black transition-opacity duration-500 pointer-events-none ${
                  isActive ? "opacity-0" : "opacity-50"
                }`}
              ></div>

              {/* Título */}
              <p className="relative z-10 text-font-white text-xl text-center px-4">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      {activeItem && (
        <div ref={panelRef} className="mt-8 sm:mt-10 px-4 sm:px-6">
          <h4 className="mb-2 sm:mb-4 text-lg sm:text-xl font-medium">
            {activeItem.title}
          </h4>
          <p className="text-sm sm:text-base">{activeItem.description}</p>
        </div>
      )}
    </div>
  );
}
