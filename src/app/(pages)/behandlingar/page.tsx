"use client";
import Navbar from "@/components/navbar/Navbar";
import "./behandlingar.css";
import GridItem from "./GridItem";
import Container from "@/components/container/Container";
import { lexend700 } from "@/components/fonts/fonts";
import Footer from "@/components/footer/Footer";
import { behandlingar } from "@/data/behandlingar";

export default function BehandlingarPage() {
  return (
    <div className="behandlingar-container">
      <Navbar />
      <Container>
        <div className="page-title-container">
          <h1 className={`page-title ${lexend700.className}`}>Behandlingar</h1>
        </div>
        <div className="grid-container">
          {behandlingar.map((behandling, index) => (
            <GridItem key={index} {...behandling} />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
