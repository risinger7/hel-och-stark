import Link from "next/link";
import { lexend200 } from "../fonts/fonts";
import "./addvert-style.css";

export default function Addvert() {
  return (
    <div className="addvert-wrapper">
      <div className="addvert-text">
        <p className={`${lexend200.className}`}>Ansluten till</p>
      </div>
      <div className="logotype-container">
        <Link className="logotype-wrapper" href={"/aktuellt"}>
          <img
            className="logotype-image make-logo-smaller"
            src="./epassi.png"
            alt="Epassi Logo"
          />
        </Link>
        <Link className="logotype-wrapper" href={"/aktuellt"}>
          <img
            className="logotype-image"
            src="./wellnet.png"
            alt="Wellnet Logo"
          />
        </Link>
      </div>
    </div>
  );
}
