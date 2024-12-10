"use client";
import "./page.css";
import { lexend200, lexend400, lexend700 } from "@/components/fonts/fonts";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/behandlingar");
  };

  return (
    <div>
      <Navbar />
      <div className="welcome-page">
        <div className="welcome-container">
          <h1 className={`${lexend700.className} welcome-title`}>
            Varmt välkommen till hel & stark!
          </h1>
          <p className={lexend400.className}>
            Välkommen till en plats där din hälsa och välmående står i centrum
            med behandlingar anpassade efter dina unika behov.
          </p>
          <button className="welcome-button" onClick={handleNavigate}>
            Boka behandling
          </button>
        </div>
      </div>
      <div className="footer"> 
        <div className="footer-info">
          <div className={`${lexend200.className} footer-info-grid`}>
            <p className={`${lexend400.className} grid-span-2`}>Kontakt</p>
            <p className="grid-item">Telefon:</p>
            <p className="grid-item">070 285 33 22</p>
            <p className="grid-item">Email:</p>
            <p className="grid-item">camilla.risinger@gmail.com</p>
            <p className="grid-item">Adress:</p>
            <p className="grid-item">
              Bromma, Gustavslundsvägen, 26 Alviks Torg
            </p>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.01825251773!2d17.980622577340988!3d59.33264909309032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f779cab06b26d%3A0xd7cb10c59707377a!2sHel%20%26%20Stark%20massageterapi%20(c%2Fo%20Naprapatlandslaget)!5e0!3m2!1ssv!2sse!4v1732144254525!5m2!1ssv!2sse"
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
