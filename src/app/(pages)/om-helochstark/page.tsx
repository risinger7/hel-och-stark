import Navbar from "@/components/navbar/Navbar";
import "./om.css";
import { lexend200, lexend400, lexend700 } from "@/components/fonts/fonts";
export default function OmHelOchStark() {
  return (
    <div className="om-container">
      <Navbar />
      <div className={`${lexend400.className} om-text-container`}>
        <h1 className={`${lexend700.className}`}>
          Hel & Stark massageterapi & rehab
        </h1>
        <p className="om-text">
          Varmt välkommen till Hel & Stark massageterapi & rehab - med
          personligt bemötande och individanpassad behandling! Har du värk? Ont
          i nacken, axeln, ländryggen eller känner du dig tung i kroppen? Har du
          nackspärr, gnisslar tänder eller hindras du av en
          tennis/mus/golf-armbåge? Enkelt uttryckt kan jag genom massagen får
          dina muskler att kommunicera med varandra och samarbeta igen.
        </p>
        <p className="om-text">
          Jag erbjuder: Behandlande/terapeutisk massageterapi, Klassisk svensk
          massage, Lymfmassage, Käkledsbehandling, Gravidmassage, Idrottsmassage
          samt Företagsmassage. Massage är fantastiskt välgörande och
          kraftfullt, både när det gäller att mota värk och få ner stressnivån i
          kroppen.
        </p>
        <p className="om-text">
          Jag är diplomerad medicinsk massageterapeut samt utbildad lymfmassör
          vid Axelsons Gymnastiska Institut och medlem i Kroppsterapeuternas
          Yrkesförbund. Jag har även en friskvårdsutbildning där jag bl a läst
          träningslära, kost och hälsopedagogik. Med lång erfarenhet av
          kundrelationer sedan tidigare, gör mitt förhållningssätt enkelt att
          lyssna på och möta kundens behov, lösa upp knutar och förekomma
          problem.
        </p>
        <p className="om-text">
          Jag är ansluten till epassi och Wellnet. Hos mig kan du också köpa
          Forever Livings fantastiska Aloe Veraprodukter. Varmt välkommen till
          Hel & Stark - med personligt bemötande och individanpassad behandling!
        </p>

        <p></p>
        <p className="om-text">
          Camilla Arctaedius camilla@helochstark.se 070-2853322 Enklast är att
          maila eller messa mig, så svarar jag så snart jag kan.
        </p>
      </div>
    </div>
  );
}
