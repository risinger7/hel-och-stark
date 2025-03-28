import Behandling from "@/components/behandling/Behandling";
import "@/app/(pages)/behandlingar/behandlingar.css";

export default function Behandlingar() {
  return (
    <div className="behandlingar-container">
      <h1 className="page-title">Våra Behandlingar</h1>
      <div className="grid-container">
        {behandlingar.map((behandling, index) => (
          <Behandling key={index} {...behandling} />
        ))}
      </div>
    </div>
  );
}

const behandlingar = [
  {
    title: "Svensk Massage",
    text: "En avslappnande och djupgående massage för att lösa upp spänningar.",
    image: "/hel1.png",
    bookingUrl: "https://boka.se/svensk-massage",
    price: 600,
  },
  {
    title: "Aromaterapi",
    text: "En mjuk och behaglig massage med eteriska oljor för total avslappning.",
    image: "/images/aromaterapi.jpg",
    bookingUrl: "https://boka.se/aromaterapi",
    price: 700,
  },
  {
    title: "Idrottsmassage",
    text: "Djupvävnadsmassage för att förbättra återhämtning och prestation.",
    image: "/images/idrottsmassage.jpg",
    bookingUrl: "https://boka.se/idrottsmassage",
    price: 750,
  },
];
