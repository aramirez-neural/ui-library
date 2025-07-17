import { useEffect, useRef } from "preact/hooks";
import { gsap } from "gsap";

export default function CircleItem({ title, active, onClick, onHover }) {
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        width: active
          ? "clamp(180px, 38vw, 380px)"
          : "clamp(160px, 30vw, 320px)",
        height: active
          ? "clamp(180px, 38vw, 380px)"
          : "clamp(160px, 30vw, 320px)",
        duration: 0.2,
        ease: "power2.out",
      });
    }
  }, [active]);

  return (
    <div
      ref={circleRef}
      onClick={onClick}
      onMouseEnter={onHover}
      className="flex items-center justify-center text-center rounded-full cursor-pointer border border-gray-300 bg-white shadow-md overflow-hidden transition-all"
    >
      <h3 className="text-sm sm:text-base md:text-lg font-medium px-4">
        {title}
      </h3>
    </div>
  );
}
