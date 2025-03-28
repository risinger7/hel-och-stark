import { lexend200, lexend700 } from "@/components/fonts/fonts";
import "./behandling.css";

type BehandlingProps = {
  title: string;
  text: string;
  image?: string;
  bookingUrl: string;
  price: number;
};

export default function Behandling({
  title,
  text,
  image,
  bookingUrl,
  price,
}: BehandlingProps) {
  return (
    <div className="grid-item">
      <h1 className={`${lexend700.className} grid-item-title`}>{title}</h1>
      <p className={`${lexend200.className} grid-text`}>{text}</p>

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
    </div>
  );
}
