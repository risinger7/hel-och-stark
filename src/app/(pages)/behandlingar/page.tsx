"use client";
import "./behandlingar.css";
import Item from "./Item";

export default function Behandlingar() {
  return (
    <div className="behandlingar-container">
      <h1 className="page-title">Våra Behandlingar</h1>
      <div className="grid-container">
        {behandlingar.map((behandling, index) => (
          <Item key={index} {...behandling} />
        ))}
      </div>
    </div>
  );
}

const behandlingar = [
  {
    title: "Lymfmassage",
    slug: "lymfmassage",
    text: 'Lymfmassage stimulerar lymfsystemet att föra ut överskottsvätska och slaggprodukter på ett effektivt sätt ur kroppen - sätter fart på kroppens avlopp helt enkelt. Lymfmassagen består av strykningar, djupandning och lätta tryck i lymfflödets riktning och ibland något djupare grepp för att lösa upp stopp och fibroser. Detta är en mycket lugnande behandling, eftersom lymfsystemet fungerar bäst när man är avslappnad. Behandlingen passar ALLA, men speciellt personer med någon typ av mindre svullnad, smärta, domningar eller trötthetssymptom. Kunder brukar uppleva sig "lätta i kroppen" efter massagen.',
    image: "/hel1.png",
    bookingUrl: "https://boka.se/aromaterapi",
    price: 700,
  },
  {
    title: "Idrottsmassage",
    slug: "aro",
    text: "Djupvävnadsmassage för att förbättra återhämtning och prestation.",
    image: "/images/idrottsmassage.jpg",
    bookingUrl: "www.example.com",
    price: 750,
  },
];
