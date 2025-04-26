"use client"

import { useState, useEffect } from "react"
import "./popular.css"
import { ChevronLeft, ChevronRight } from "lucide-react" // Import arrow icons
import { lexend300 } from "../fonts/fonts"

type Item = {
  text: string
  img?: string
}

const items: Item[] = [
  {
    text: "",
    img: "./epassi.png",
  },
  {
    text: "",
    img: "./wellnet.png",
  },
  {
    text: "hejsan text test",
  },
]

export default function Popular() {
  const [index, setIndex] = useState(0)

  // Auto-scroll every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(interval)
  }, [index])

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  return (
    <div className="popular">
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${index * 520}px)` }}
        >
          {items.map((item, i) =>
            item.text !== "" ? (
              <p key={i} className={`${lexend300.className} item`}>
                text
              </p>
            ) : (
              <img key={i} src={item.img}></img>
            )
          )}
        </div>
      </div>

      <div className="arrows-container">
        <button className="arrow" onClick={prevSlide}>
          <ChevronLeft size={32} />
        </button>
        <button className="arrow" onClick={nextSlide}>
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  )
}
