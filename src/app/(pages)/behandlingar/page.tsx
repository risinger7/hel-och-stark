"use client";
import Navbar from "@/components/navbar/Navbar";
import "./behandlingar.css";
import { lexend200, lexend700 } from "@/components/fonts/fonts";
import { useState } from "react";

export default function BehandlingarPage() {
  const [showText, setShowText] = useState<boolean>(false);

  return (
    <div>
      <Navbar />
      <h1>Titel här eller nåt</h1>
      <div className="grid-container">
        <div className="grid">
          <div className="grid-item">
            <h1 className={`${lexend700.className} grid-item-title`}>
              Behandlande/Terapeutisk Massage
            </h1>
            <div className="grid-item-text-cont"></div>
            <p className={`${lexend200.className} grid-item-text`}>
              För stela, korta, ömma, inflammerade muskler passar det bra med en
              mjukgörande massage och spänningsbehandling i kombination med
              djupverkande muskelbehandling och stretch.
            </p>
            {!showText && (
              <button
                className={`${lexend700.className} text-button`}
                onClick={() => setShowText(true)}
              >
                Läs mer
              </button>
            )}

            {showText && (
              <p
                className={`${lexend200.className} grid-text ${showText ? "show-text" : ""}`}
              >
                En mycket effektiv behandlingsform för nacke, axlar och rygg,
                tennis- mus- eller golfarmbåge, löparknä eller allmän
                trötthetskänsla i ryggen. Om du har ett specifikt problem,
                rekommenderar jag massage, 3-5 gånger med ungefär en veckas
                mellanrum.
                <span>
                  <button
                    className={`${lexend700.className} text-button`}
                    onClick={() => setShowText(false)}
                  >
                    Visa mindre
                  </button>
                </span>
              </p>
            )}

            <div
              className={`grid-image-container ${showText ? "hideImage" : ""}`}
            >
              <img src="/hel1.png" className={`grid-image`}></img>
            </div>
            <div className="price-info">
              <p>Pris: 100kr</p>

              <button className={`${lexend700.className} grid-button boka`}>
                Boka
              </button>
            </div>
          </div>

          <div className="grid-item">grid-item</div>
          <div className="grid-item">grid-item</div>
          <div className="grid-item">grid-item</div>
          <div className="grid-item">grid-item</div>
          <div className="grid-item">grid-item</div>
        </div>
      </div>
    </div>
  );
}
