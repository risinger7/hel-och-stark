"use client"
import Navbar from "@/components/navbar/Navbar"
import "./behandlingar.css"
import { lexend200, lexend300, lexend700 } from "@/components/fonts/fonts"
import { useState } from "react"
import Behandling from "@/components/behandling/Behandling"

export default function BehandlingarPage() {
  const [showText, setShowText] = useState<boolean>(false)

  return (
    <div className="behandlingar-container">
      <Navbar />
      <h1 className="title-container">Behandlingar</h1>
      <div className="grid-container">
        <div className="grid">
          <Behandling />
          <div className="grid-item">grid-item</div>
          <div className="grid-item">grid-item</div>
          <div className="grid-item">grid-item</div>
          <div className="grid-item">grid-item</div>
          <div className="grid-item">grid-item</div>
        </div>
      </div>
    </div>
  )
}
