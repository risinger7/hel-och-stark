"use client";

import { useParams, useRouter } from "next/navigation";
/* import { useRouter } from "next/router"; */
import { useEffect, useState } from "react";
import { ItemProps } from "../Item";

type Item = ItemProps;

const items: Item[] = [
  {
    title: "Lymfmassage",
    slug: "lymfmassage",
    text: "Lymfmassage stimulerar lymfsystemet att föra ut överskottsvätska...",
    image: "/hel1.png",
    bookingUrl: "https://boka.se/aromaterapi",
    price: 700,
  },
  {
    title: "Aromaterapi",
    slug: "aro",
    text: "Aromaterapi är en behandling som använder eteriska oljor...",
    image: "/hel1.png",
    bookingUrl: "https://boka.se/aromaterapi",
    price: 500,
  },
];

export default function ItemPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string; // Dynamic slug from URL
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    if (slug) {
      const index = items.findIndex((i) => i.slug === slug);
      if (index !== -1) {
        setCurrent(index);
      } else {
        setCurrent(null);
      }
    }
  }, [slug]);

  const updateItem = (newIndex: number) => {
    const newSlug = items[newIndex].slug;
    router.push(`/behandlingar/${newSlug}`);

    setTimeout(() => {
      setCurrent(newIndex);
    }, 100);
  };

  const nextItem = () => {
    if (current !== null) {
      updateItem((current + 1) % items.length);
    }
  };

  const prevItem = () => {
    if (current !== null) {
      updateItem((current - 1 + items.length) % items.length);
    }
  };

  if (current === null) {
    return <p className="text-red-500">Behandlingen hittades inte!</p>;
  }

  return (
    <div>
      <div>
        <button onClick={() => router.push("/behandlingar")}>
          Gå tillbaka
        </button>
      </div>
      <h1>{items[current].title}</h1>
      <p>{items[current].text}</p>
      <button onClick={prevItem}>← Föregående</button>
      <button onClick={nextItem}>Nästa →</button>
    </div>
  );
}
