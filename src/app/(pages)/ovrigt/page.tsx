import Navbar from "../../../components/navbar/Navbar";
import "./ovrigt.css";
import Container from "@/components/container/Container";
import Footer from "@/components/footer/Footer";
import { lexend200 } from "@/components/fonts/fonts";

export default function OvrigtPage() {
  return (
    <div className="ovrigt-page">
      <Navbar />
      <Container>
        <div className="ovrigt-content">
          <h1 className={`ovrigt-text ${lexend200.className}`}>
            Återförsäljare av Forever Livings Aloe vera produkter
          </h1>
          <div className="ovrigt-images">
            <div className="ovrigt-image-wrapper">
              <img
                src="forever1.jpeg"
                alt="forever commercial picture"
                className="ovrigt-image"
              />
            </div>
            <div className="ovrigt-image-wrapper">
              <img
                src="forever4.jpg"
                alt="forever commercial picture"
                className="ovrigt-image"
              />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
