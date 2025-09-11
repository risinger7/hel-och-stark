"use client";

import Link from "next/link";
import { lexend700 } from "../../components/fonts/fonts";
import { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  useEffect(() => {
    if (burgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [burgerOpen]);

  return (
    <nav className={`${lexend700.className} navbar-container`}>
      {/* Normal desktop classname="navbar" -- over 600px */}
      <ul className="navbar">
        <Link className="navbar-item" href={"/"}>
          Hem
        </Link>
        <Link className="navbar-item" href={"/behandlingar"}>
          Behandlingar
        </Link>
        <Link className="navbar-item" href={"/aktuellt"}>
          Företagsmassage & Friskvård
        </Link>
        <Link className="navbar-item" href={"/om-helochstark"}>
          Om Hel & Stark
        </Link>
        <Link className="navbar-item" href={"/ovrigt"}>
          Övrigt
        </Link>
      </ul>

      {/* Smaller screens, phone, classname="burger" -- less than 600px */}
      {burgerOpen && (
        <div className={`${burgerOpen ? "burger-navbar-container" : ""}`}>
          <ul className="burger-navbar">
            <Link className="burger-navbar-item" href={"/"}>
              Hem
            </Link>
            <Link className="burger-navbar-item" href={"/behandlingar"}>
              Behandlingar
            </Link>
            <Link className="burger-navbar-item" href={"/aktuellt"}>
              Företagsmassage & Friskvård
            </Link>
            <Link className="burger-navbar-item" href={"/om-helochstark"}>
              Om Hel&Stark
            </Link>
            <Link className="burger-navbar-item" href={"/ovrigt"}>
              Övrigt
            </Link>
          </ul>
        </div>
      )}
      <div
        onClick={() => setBurgerOpen((prev) => !prev)}
        className={`${burgerOpen ? "burger-open" : "burger"}`}
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    </nav>
  );
}
