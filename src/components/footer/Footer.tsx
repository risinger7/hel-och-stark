import Container from "../container/Container";
import { lexend200, lexend400 } from "../fonts/fonts";
import "./footer.css";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <div className="footer-section">
            <Container>
                <div className="footer">
                    <div className="footer-item contact-info-container">
                        <div className="contact-row">
                            <p
                                className={`${lexend200.className} contact-item-1`}
                            >
                                Telefon:
                            </p>
                            <p
                                className={`${lexend400.className} contact-item-2`}
                            >
                                070 285 33 22
                            </p>
                        </div>
                        <div className="contact-row">
                            <p
                                className={`${lexend200.className} contact-item-1`}
                            >
                                Email:
                            </p>
                            <p
                                className={`${lexend400.className} contact-item-2`}
                            >
                                camilla@helochstark.se
                            </p>
                        </div>
                        <div className="contact-row">
                            <p
                                className={`${lexend200.className} contact-item-1`}
                            >
                                Adress:
                            </p>
                            <p
                                className={`${lexend400.className} contact-item-2`}
                            >
                                hos Fotiakliniken, Gustavslundsvägen 149, Alviks
                                torg
                            </p>
                        </div>
                        <div className="footer-icons">
                            <a
                                className="soc-link"
                                href="https://www.instagram.com/helochstarkmassage/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram size={48} />
                            </a>
                            <a
                                className="soc-link"
                                href="https://www.facebook.com/helochstark/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook size={48} />
                            </a>
                        </div>
                    </div>

                    <iframe
                        className="map"
                        src="https://www.google.com/maps?q=Gustavslundsvägen+149R,+167+51+Bromma&output=embed"
                        loading="lazy"
                    />
                </div>
            </Container>
        </div>
    );
}
