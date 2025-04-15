"use client";

import { useState, useEffect } from "react";
import "./popular.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import arrow icons
import { lexend300 } from "../fonts/fonts";

const items = [
  "Varmt välkommen till Hel & Stark massageterapi...",
  "Lorem ipsum dolor sit amet consectetur...",
  "Another amazing treatment just for you!",
  "Exclusive offers on your next session!",
  "New services now available!",
  "Health tips for a better life!",
];

export default function Popular() {
  const [index, setIndex] = useState(0);

  // Auto-scroll every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="popular">
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${index * 520}px)` }}
        >
          {items.map((text, i) => (
            <p className={`${lexend300.className} item`} key={i}>
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="arrows-container">
        <button className="arrow" onClick={prevSlide}>
          <ChevronLeft size={30} />
        </button>
        <button className="arrow" onClick={nextSlide}>
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}
