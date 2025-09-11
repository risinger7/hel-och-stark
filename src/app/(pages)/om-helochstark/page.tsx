import Navbar from "@/app/navbar/Navbar";
import "./om.css";
import { lexend300, lexend700 } from "@/components/fonts/fonts";
import Footer from "@/components/footer/Footer";
export default function OmHelOchStark() {
  return (
    <div className="om-container">
      <Navbar />
      <div className={`${lexend300.className} om-text-container`}>
        <h1 className={`${lexend700.className} om-title`}>
          Hel & Stark massageterapi & rehab
        </h1>
        <p>
          Varmt välkommen till Hel & Stark massageterapi & rehab - med
          personligt bemötande och individanpassad behandling! Har du värk? Ont
          i nacken, axeln, ländryggen eller känner du dig tung i kroppen? Har du
          nackspärr, gnisslar tänder eller hindras du av en
          tennis/mus/golf-armbåge? Enkelt uttryckt kan jag genom massagen får
          dina muskler att kommunicera med varandra och samarbeta igen.
        </p>
        <p>
          Jag erbjuder: Behandlande/terapeutisk massageterapi, Klassisk svensk
          massage, Lymfmassage, Käkledsbehandling, Gravidmassage, Idrottsmassage
          samt Företagsmassage. Massage är fantastiskt välgörande och
          kraftfullt, både när det gäller att mota värk och få ner stressnivån i
          kroppen.
        </p>
        <p>
          Jag är diplomerad medicinsk massageterapeut samt utbildad lymfmassör
          vid Axelsons Gymnastiska Institut och medlem i Kroppsterapeuternas
          Yrkesförbund. Jag har även en friskvårdsutbildning där jag bl a läst
          träningslära, kost och hälsopedagogik. Med lång erfarenhet av
          kundrelationer sedan tidigare, gör mitt förhållningssätt enkelt att
          lyssna på och möta kundens behov, lösa upp knutar och förekomma
          problem.
        </p>
        <p>
          Jag är ansluten till epassi och Wellnet. Hos mig kan du också köpa
          Forever Livings fantastiska Aloe Veraprodukter. Varmt välkommen till
          Hel & Stark - med personligt bemötande och individanpassad behandling!
        </p>
        <p>
          Camilla Arctaedius camilla@helochstark.se 070-2853322 Enklast är att
          maila eller messa mig, så svarar jag så snart jag kan.
        </p>
        <div className="om-image-wrapper">
          <img
            src="camilla.jpg"
            alt="Camilla Arctaedius"
            className="om-image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
