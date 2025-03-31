"use client";
import { lexend200, lexend700 } from "@/components/fonts/fonts";
import "./item.css";
import Link from "next/link";

export type ItemProps = {
  title: string;
  slug: string;
  text: string;
  image: string | undefined;
  bookingUrl: string;
  price: number;
};

export default function Item({
  title,
  slug,
  text,
  image,
  bookingUrl,
  price,
}: ItemProps) {
  return (
    <div className="grid-item">
      <h1 className={`${lexend700.className} item-title`}>{title}</h1>

      <p className={`${lexend200.className} grid-text`}>
        {text.substring(0, 100)}...
      </p>

      <Link href={`/behandlingar/${slug}`}>
        <div className="read-more">Läs mer</div>
      </Link>

      <div className="grid-buttons">
        <span className="price-info">{price} kr</span>
        <Link href={bookingUrl} rel="noopener noreferrer">
          <button className="grid-button boka">Boka</button>
        </Link>
      </div>
    </div>
  );
}
