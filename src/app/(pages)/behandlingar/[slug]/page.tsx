"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ItemProps } from "../GridItem";
import Navbar from "@/components/navbar/Navbar";
import "./item-page.css";
import Container from "@/components/container/Container";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { lexend300, lexend400, lexend700 } from "@/components/fonts/fonts";

type Item = ItemProps;

const items: Item[] = [
  {
    title: "Lymfmassage",
    slug: "lymfmassage",
    text: `Lymfmassage är en mjuk och avslappnande behandling som stimulerar lymfsystemet,
vilket hjälper kroppen att transportera bort slaggprodukter och överskottsvätska.
Genom långsamma, rytmiska rörelser och lätt tryck kan behandlingen minska svullnad,
förbättra immunförsvaret och öka energinivån. Den är särskilt effektiv vid problem
som vätskeansamling, celluliter, stress eller efter kirurgiska ingrepp.
Lymfmassagen utförs i lugn miljö och anpassas efter individuella behov.`,
    image: "/hel1.png",
    bookingUrl: "https://boka.se/lymfmassage",
    price: 700,
  },
  {
    title: "Aromaterapi",
    slug: "aromaterapi",
    text: `Aromaterapi är en holistisk behandlingsmetod där naturliga eteriska oljor används
för att påverka både kropp och sinne. Under behandlingen masseras kroppen varsamt medan
terapeutiska dofter sprids i rummet, vilket skapar en djup avslappning.
Varje olja har unika egenskaper – vissa lugnar nervsystemet, andra piggar upp eller stärker immunförsvaret.
Aromaterapi kan hjälpa vid sömnsvårigheter, oro, muskelspänningar och hormonell obalans.
Behandlingen anpassas utifrån dina behov och önskemål för att ge bästa möjliga effekt.`,
    image: "/hel1.png",
    bookingUrl: "https://boka.se/aromaterapi",
    price: 500,
  },
];

export default function ItemPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
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
    <div className="item-page-container">
      <Navbar />
      <div className="go-back">
        <button
          className={`${lexend400.className}`}
          onClick={() => router.push("/behandlingar")}
        >
          Gå tillbaka
        </button>
      </div>

      <Container>
        <div className="item-content">
          <h1 className={`item-title ${lexend700.className}`}>
            {items[current].title}
          </h1>
          <p className={`text-container ${lexend300.className}`}>
            {items[current].text}
          </p>

          <div className="image-container">
            <img src={items[current].image} alt={items[current].title} />
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
