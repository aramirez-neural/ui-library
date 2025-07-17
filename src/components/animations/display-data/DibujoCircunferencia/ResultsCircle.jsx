import { useLayoutEffect, useRef } from "preact/hooks";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function ResultsCircle({
  value,
  label,
  duration = 2,
  delay = 0,
}) {
  const pathRef = useRef(null);
  const dotRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const dot = dotRef.current;

      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      gsap.to(path, {
        strokeDashoffset: 0,
        duration,
        delay,
        ease: "power1.inOut",
      });

      gsap.fromTo(
        dot,
        { opacity: 0 },
        {
          opacity: 1,
          motionPath: {
            path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
          },
          duration,
          delay,
          ease: "power1.inOut",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [duration, delay]);

  return (
    <div
      ref={containerRef}
      className="relative w-36 h-36 flex items-center justify-center text-font-primary"
    >
      <svg className="absolute w-full h-full" viewBox="0 0 100 100">
        {/* Path círculo */}
        <path
          ref={pathRef}
          d="M50,2 a48,48 0 1,1 -0.1,0"
          fill="none"
          stroke="var(--color-theme-primary)"
          strokeWidth="1"
          transform="rotate(45 50 50)"
        />

        {/* Bola que sigue al path */}
        <circle ref={dotRef} r="3" fill="var(--color-theme-primary)" />
      </svg>

      {/* Texto */}
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-xl font-medium">{value}</p>
        <p className="text-xs md:text-sm">{label}</p>
      </div>
    </div>
  );
}
