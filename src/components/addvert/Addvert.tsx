import Link from "next/link";
import Image from "next/image";
import { lexend200 } from "../fonts/fonts";
import "./addvert-style.css";

export default function Addvert() {
  return (
    <div className="addvert-wrapper">
      <div className="addvert-text">
        <p className={lexend200.className}>Ansluten till</p>
      </div>
      <div className="logotype-container">
        <Link className="logotype-wrapper" href="/aktuellt">
          <div>
            <Image
              src="/epassi.png"
              alt="Epassi Logo"
              className="logotype-image make-logo-smaller"
              fill
            />
          </div>
        </Link>
        <Link className="logotype-wrapper" href="/aktuellt">
          <Image
            src="/wellnet.png"
            alt="Wellnet Logo"
            fill
            className="logotype-image"
          />
        </Link>
      </div>
    </div>
  );
}
