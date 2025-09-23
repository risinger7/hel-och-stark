"use client";

import Link from "next/link";
import { lexend700 } from "../../components/fonts/fonts";
import { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  useEffect(() => {
    if (burgerOpen) {
      // Lock scroll
      window.scrollTo(0, 0);
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scroll
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, 0);
    }

    return () => {
      // Cleanup if component unmounts
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [burgerOpen]);

  const navLinks = [
    { href: "/", label: "Hem" },
    { href: "/behandlingar", label: "Behandlingar" },
    { href: "/aktuellt", label: "Företagsmassage & Friskvård" },
    { href: "/om-helochstark", label: "Om Hel & Stark" },
    { href: "/ovrigt", label: "Övrigt" },
  ];

  return (
    <nav className={`${lexend700.className} navbar-container`}>
      {/* Desktop nav */}
      <ul className="navbar">
        {navLinks.map((link) => (
          <Link key={link.href} className="navbar-item" href={link.href}>
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Burger menu overlay */}
      {burgerOpen && (
        <div className="burger-navbar-container">
          <ul className="burger-navbar">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="burger-navbar-item"
                href={link.href}
                onClick={() => setBurgerOpen(false)} // Close menu on click
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}

      {/* Burger button */}
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
