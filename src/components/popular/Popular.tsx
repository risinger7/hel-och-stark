"use client";

import { useState, useEffect } from "react";
import "./popular.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import arrow icons

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

  // Auto-scroll every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);
    return () => clearInterval(interval);
  }, [index]);

  // Move to the next item
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Move to the previous item
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="popular">
      <button className="arrow left" onClick={prevSlide}>
        <ChevronLeft size={30} />
      </button>

      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${index * 520}px)` }} // Adjust width dynamically
        >
          {items.map((text, i) => (
            <div className="item" key={i}>
              {text}
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
