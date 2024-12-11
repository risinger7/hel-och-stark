import Container from "../container/Container"
import { lexend200, lexend400 } from "../fonts/fonts"
import "./footer.css"
import { Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <div className="footer-section">
      <Container>
        <div className="footer">
          <div className="footer-item contact-info-container">
            <div className="contact-row">
              <p className={`${lexend200.className} contact-item-1`}>
                Telefon:
              </p>
              <p className={`${lexend400.className} contact-item-2`}>
                070 285 33 22
              </p>
            </div>
            <div className="contact-row">
              <p className={`${lexend200.className} contact-item-1`}>Email:</p>
              <p className={`${lexend400.className} contact-item-2`}>
                camilla@helochstark.se
              </p>
            </div>
            <div className="contact-row">
              <p className={`${lexend200.className} contact-item-1`}>Adress:</p>
              <p className={`${lexend400.className} contact-item-2`}>
                Bromma, Gustavslundsvägen 26, Alviks Torg
              </p>
            </div>
            <div className="footer-icons">
              <Instagram size={48} />
              <Facebook size={48} />
            </div>
          </div>

          {/* Map - might move to another file */}

          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.01825251773!2d17.980622577340988!3d59.33264909309032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f779cab06b26d%3A0xd7cb10c59707377a!2sHel%20%26%20Stark%20massageterapi%20(c%2Fo%20Naprapatlandslaget)!5e0!3m2!1ssv!2sse!4v1732144254525!5m2!1ssv!2sse"
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </div>
  )
}

{
  /* <p className="grid-item">Telefon:</p>
          <p className="grid-item">070 285 33 22</p>
          <p className="grid-item">Email:</p>
          <p className="grid-item">camilla@helochstark.se</p>
          <p className="grid-item">Adress:</p>
          <p className="grid-item">Bromma, Gustavslundsvägen 26, Alviks Torg</p> */
}
