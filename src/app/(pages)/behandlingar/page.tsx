"use client";

import Navbar from "@/components/navbar/Navbar";
import "./behandlingar.css";
/* import { lexend200, lexend700 } from "@/components/fonts/fonts"; */
import { useEffect, useState } from "react";

export default function BehandlingarPage() {
  const [showText, setShowText] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div>
      <Navbar />
      <div>
        <h1>Titel</h1>
      </div>
      <div className="grid-container">
        <div className="grid">
          <div className="grid-item">
            <h1>rubrik</h1>
            <p>pris</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a unde
              veniam recusandae excepturi fugiat accusantium quos dolore fuga
              voluptas, ab reprehenderit magnam cupiditate sunt deleniti
              repellendus fugit ipsam corrupti.
            </p>
          </div>
          <div className="grid-item">grid-item</div>
          <div className="grid-item">grid-item</div>
          <div className="grid-item">grid-item</div>
          <div className="grid-item">grid-item</div>
          <div className="grid-item">grid-item</div>
        </div>
      </div>
    </div>
  );
}
