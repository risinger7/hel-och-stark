"use client";
import Navbar from "@/components/Navbar/Navbar";
import "./behandlingar.css";
import { lexend200, lexend700 } from "@/components/fonts/fonts";

export default function BehandlingarPage() {
  function expandText() {
    return null;
  }

  return (
    <div>
      <Navbar />
      <h1>Titel här eller nåt</h1>
      <div className="grid-container">
        <div className="grid">
          <div className="grid-item">
            <h1 className={`${lexend200.className} grid-item-title`}>
              Behandlande/Terapeutisk Massage
            </h1>
            <p className={`${lexend200.className} grid-text`}>
              För stela, korta, ömma, inflammerade muskler passar en mjukgörande
              massage och spänningsbehandling i kombination med djupverkande
              muskelbehandling och stretch bra. En mycket effektiv
              behandlingsform för nacke, axlar och rygg, tennis- mus- eller
              golfarmbåge, löparknä eller allmän trötthetskänsla i ryggen. Om du
              har ett specifikt problem, rekommenderar jag massage, 3-5 gånger
              med ungefär en veckas mellanrum.
            </p>

            <div className="grid-image-container">
              <img src="/hel1.png" className="grid-image"></img>
            </div>
            <div className="grid-buttons">
              <button
                className={`${lexend700.className} grid-button`}
                onClick={expandText}
              >
                Läs mer
              </button>
              <button
                className={`${lexend700.className} grid-button boka`}
                onClick={expandText}
              >
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
