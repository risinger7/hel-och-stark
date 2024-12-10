"use client";
import Container from "@/components/container/Container";
import "./page.css";
import { lexend200, lexend400, lexend700 } from "@/components/fonts/fonts";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/navigation";
import Popular from "@/components/popular/Popular";

export default function Home() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/behandlingar");
  };

  return (
    <div>
      <div className="home-container">
        <Navbar />
        <Container>
          <div className="welcome-page">
            <div className="welcome-image-container">
              {/* <img className="welcome-image" src="/hero2.jpg"></img> */}
              <div className="welcome-container">
                <h1 className={`${lexend700.className} welcome-title`}>
                  Varmt välkommen till Hel & Stark!
                </h1>
                <p className={`${lexend400.className} welcome-text`}>
                  Välkommen till en plats där din hälsa och välmående står i
                  centrum med behandlingar anpassade efter dina unika behov.
                </p>
                <button
                  className={`${lexend700.className} welcome-button`}
                  onClick={handleNavigate}
                >
                  Boka behandling
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Popular />
      <Footer />
    </div>
  );
}
