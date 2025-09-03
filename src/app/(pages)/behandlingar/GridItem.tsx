"use client";
import { lexend200, lexend400, lexend700 } from "@/components/fonts/fonts";
import "./grid-item.css";
import "./grid-item-button.css";
import Link from "next/link";

export type ItemProps = {
  title: string;
  slug: string;
  text: string;
  bookingUrl: string;
  price: number;
};

export default function GridItem({
  title,
  slug,
  text,
  bookingUrl,
  price,
}: ItemProps) {
  return (
    <div className="grid-item">
      <Link
        href={`/behandlingar/${slug}`}
        className={`${lexend700.className} grid-item-title`}
      >
        {title}
      </Link>
      <p className={`${lexend200.className} grid-text`}>
        {text.substring(0, 100)}...
      </p>
      <Link href={`/behandlingar/${slug}`}>
        <div className="read-more">Läs mer</div>
      </Link>
      <div className="grid-item-buttons">
        <Link href={bookingUrl} rel="noopener noreferrer">
          <button className={`${lexend700.className} grid-item-button`}>
            Boka
          </button>
        </Link>
        <div>
          <p className={`${lexend400.className} price-info`}>
            Tid: 60 & 90 min
          </p>
          <p className={`${lexend400.className} price-info`}>
            Pris: {price} kr
          </p>
        </div>
      </div>
    </div>
  );
}
