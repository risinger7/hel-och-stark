"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import "./item-page.css";
import Container from "@/components/container/Container";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import {
  lexend200,
  lexend300,
  lexend400,
  lexend700,
} from "@/components/fonts/fonts";
import { behandlingar } from "@/data/behandlingar";

export default function ItemPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const currentIndex = behandlingar.findIndex((i) => i.slug === slug);
  const currentItem = currentIndex !== -1 ? behandlingar[currentIndex] : null;

  const navigate = (index: number) => {
    const newSlug = behandlingar[index].slug;
    router.push(`/behandlingar/${newSlug}`);
  };

  const nextItem = () => navigate((currentIndex + 1) % behandlingar.length);
  const prevItem = () =>
    navigate((currentIndex - 1 + behandlingar.length) % behandlingar.length);

  if (!currentItem) {
    return <p className="text-red-500">Behandlingen hittades inte!</p>;
  }

  return (
    <div className="item-page-container">
      <Navbar />

      <div className="go-back">
        <button
          className={lexend400.className}
          onClick={() => router.push("/behandlingar")}
        >
          Gå tillbaka
        </button>
      </div>

      <Container>
        <div className="item-content">
          <h1 className={`item-title ${lexend700.className}`}>
            {currentItem.title}
          </h1>

          <p className={`text-container ${lexend300.className}`}>
            {currentItem.text}
          </p>

          <div className={`price-time ${lexend200.className}`}>
            <div>
              <p>{currentItem.time} min</p>
              <p>{currentItem.price} kr</p>
            </div>
            <button>
              <span className="item-button">Boka</span>
            </button>
          </div>

          <div className="image-container">
            <img src={currentItem.image} alt={currentItem.title} />
          </div>

          <div className="navigation-buttons">
            <div className="tooltip-wrapper">
              <button className="arrow-button" onClick={prevItem}>
                <CircleArrowLeft size={32} />
              </button>
              <span className="tooltip-text tooltip-left">
                Föregående behandling
              </span>
            </div>

            <div className="tooltip-wrapper">
              <button className="arrow-button" onClick={nextItem}>
                <CircleArrowRight size={32} />
              </button>
              <span className="tooltip-text tooltip-right">
                Nästa behandling
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
