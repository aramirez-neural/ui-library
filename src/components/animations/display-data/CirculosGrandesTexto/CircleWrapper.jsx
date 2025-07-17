import { useEffect, useRef, useState } from "preact/hooks";
import { gsap } from "gsap";
import CircleItem from "./CircleItem.jsx";
import data from "../../../data/whichWillInvolve.js";

export default function CircleWrapper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  return (
    <>
      <div className="grid grid-cols-1 place-items-center md:flex justify-center gap-4 sm:gap-6 flex-wrap mx-auto">
        {data.map((item, index) => (
          <CircleItem
            key={index}
            title={item.title}
            active={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            onHover={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {activeIndex !== null && (
        <div
          ref={contentRef}
          className="mt-6 sm:mt-8 px-4 sm:px-6 max-w-5xl mx-auto text-sm sm:text-base space-y-6"
        >
          {data[activeIndex].content.map((block, i) => (
            <div key={i}>
              <p className="font-semibold mb-1">{block.question}</p>
              <p>{block.answer}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
