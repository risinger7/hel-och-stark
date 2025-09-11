/* import { useState } from "react";
import { lexend200, lexend700 } from "@/components/fonts/fonts";
import "./behandling-item.css";

type BehandlingProps = {
  title: string;
  text: string;
  bookingUrl: string;
  price: number;
};

export default function BehandlingItem({
  title,
  text,
  bookingUrl,
  price,
}: BehandlingProps) {
  return (
    <div className="grid-item">
      <h1 className={`${lexend700.className} grid-item-title`}>{title}</h1>
      <p className={`${lexend200.className} grid-text`}>
        {text.substring(0, 100)}...
      </p>

      <div className="grid-buttons">
        <span className="price-info">{price} kr</span>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
          <button className="grid-button boka">Boka</button>
        </a>
      </div>
    </div>
  );
} */
