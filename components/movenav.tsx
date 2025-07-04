// components/movenav.tsx
import React from "react";

interface AnimatedWordsProps {
  text: string;
  className?: string;
  splitBy?: "word" | "line" | "letter";
  animationDelayStart?: number;
}

const AnimatedWords: React.FC<AnimatedWordsProps> = ({
  text,
  className = "",
  splitBy = "word",
  animationDelayStart = 0.1,
}) => {
  let parts: string[];
  if (splitBy === "line") {
    parts = text.split("\n");
  } else if (splitBy === "letter") {
    parts = text.split("");
  } else {
    parts = text.split(" ");
  }

  return (
    <span className={className}>
      {parts.map((part, i) => (
        <span
          key={i}
          className={splitBy === "line" ? "block animated-fade-in-up" : "inline-block animated-fade-in-up"}
          style={{ animationDelay: `${animationDelayStart + i * 0.2}s` }}
        >
          {part}
          {splitBy === "word" && i < parts.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
};

export default AnimatedWords;
