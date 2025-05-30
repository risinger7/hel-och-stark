import Navbar from "@/components/navbar/Navbar";
import "./ovrigt.css";
import Container from "@/components/container/Container";
import Footer from "@/components/footer/Footer";

export default function OvrigtPage() {
  return (
    <div className="ovrigt-page">
      <Navbar />
      <Container>
        <div className="ovrigt-content">
          <div className="ovrigt-logo-container">
            <img src="forever4.jpeg"></img>
            <img src="forever-logo.png"></img>
          </div>
          <div>
            <p>
              content asdf Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Quibusdam repellat perspiciatis ipsa enim earum,
              voluptatibus magnam sit nam! Incidunt exercitationem ex sunt
              dolore alias placeat ad magnam labore, fuga blanditiis?
            </p>
            <p>logo</p>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
