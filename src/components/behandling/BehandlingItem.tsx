import { useState } from "react";
import { lexend200, lexend700 } from "@/components/fonts/fonts";
import "./behandling-item.css";

type BehandlingProps = {
  title: string;
  text: string;
  image?: string;
  bookingUrl: string;
  price: number;
};

export default function BenhandlingItem({
  title,
  text,
  image,
  bookingUrl,
  price,
}: BehandlingProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid-item">
      <h1 className={`${lexend700.className} grid-item-title`}>{title}</h1>
      <p className={`${lexend200.className} grid-text`}>
        {text.substring(0, 100)}...
      </p>
      <button className="read-more" onClick={() => setIsModalOpen(true)}>
        Läs mer
      </button>

      {image && (
        <div className="grid-image-container">
          <img src={image} alt={title} className="grid-image" />
        </div>
      )}

      <div className="grid-buttons">
        <span className="price-info">{price} kr</span>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
          <button className="grid-button boka">Boka</button>
        </a>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className={lexend700.className}>{title}</h2>
            <p className={lexend200.className}>{text}</p>
            <button
              className="close-modal"
              onClick={() => setIsModalOpen(false)}
            >
              Stäng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
