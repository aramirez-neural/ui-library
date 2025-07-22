import { useState } from "react";
import SandwichCard from "./SandwichCard";

const cards = [
  {
    id: 1,
    number: "01.",
    color: "theme-primary",
    title: "¿Quién necesita rehabilitación neurológica? ",
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque atque
          delectus est omnis blanditiis.
        </p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit.
        </p>
      </>
    ),
  },
  {
    id: 2,
    number: "02.",
    color: "theme-secondary",
    title: "¿Qué técnicas se utilizan en la rehabilitación neurológica?",
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque atque
          delectus est omnis blanditiis.
        </p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit.
        </p>
      </>
    ),
  },
  {
    id: 3,
    number: "03.",
    color: "theme-tertiary",
    title: "¿Cuáles son los objetivos de la rehabilitación neurológica?",
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque atque
          delectus est omnis blanditiis.
        </p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit.
        </p>
      </>
    ),
  },
];

export default function SandwichStack() {
  const [activeIndex, setActiveIndex] = useState(2);

  const orderedCards = cards.map((card, index) => {
    const relativePos = (index - activeIndex + cards.length) % cards.length;
    return {
      ...card,
      zIndex: 10 + (2 - relativePos) * 10,
      top: `${relativePos * -50}px`,
      isActive: relativePos === 0,
    };
  });

  return (
    <div className="relative w-full h-full px-2 sm:px-4">
      {orderedCards.map((card, i) => (
        <SandwichCard
          key={card.id}
          zIndex={card.zIndex}
          top={card.top}
          color={card.color}
          number={card.number}
          title={card.title}
          isActive={card.isActive}
          onClick={() => setActiveIndex(i)}
        >
          {card.content}
        </SandwichCard>
      ))}
    </div>
  );
}
