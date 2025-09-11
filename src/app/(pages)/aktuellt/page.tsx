import "./aktuellt.css";
import Navbar from "../../../components/navbar/Navbar";
import Container from "@/components/container/Container";
import Footer from "@/components/footer/Footer";
import { lexend300, lexend700 } from "@/components/fonts/fonts";

export default function AktuelltPage() {
  return (
    <div className="aktuellt-page">
      <Navbar />
      <Container>
        <div className="aktuellt-content">
          <div className="title-text-container">
            <h1 className={`${lexend700.className}`}>Friskvård</h1>
            <p className={`${lexend300.className}`}>
              Hel & Stark massageterapi & rehab är anslutet till epassi och
              Wellnet.
            </p>
          </div>
          <div className="title-text-container title-margin-top">
            <h1 className={`${lexend700.className}`}>Företagsmassage</h1>
            <p className={`${lexend300.className}`}>
              Vill du öka medarbetarnas välbefinnande, förebygga stress och
              sjukskrivningar? Få ett effektivare och mer produktivt team? Som
              medicinsk massageterapeut kan jag hjälpa er med både förebyggande
              friskvårdsmassage och med behandling av mer komplicerade besvär,
              smärtor och problem. Kontakta mig om du vill veta mer om vad jag
              kan göra för er arbetsplats.
            </p>
          </div>
          <div className="logotype-container">
            <div className="logotype-wrapper">
              <img
                className="logotype-image logo-80-small"
                src="./epassi.png"
                alt="Epassi Logo"
              />
            </div>
            <div className="logotype-wrapper">
              <img
                className="logotype-image"
                src="./wellnet.png"
                alt="Wellnet Logo"
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="aktuellt-space"></div>
      <Footer />
    </div>
  );
}
