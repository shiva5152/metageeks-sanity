"use client";
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  return (
    <Typewriter
      words={["Blockchain", "Software", "AI", "Game"]}
      loop={5}
      cursor
      cursorStyle=""
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};

export default TypewriterEffect;
