import Link from "next/link";
import { playwrite400 } from "../fonts/fonts";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className={`${playwrite400.className} navbar`}>
      <Link href={"/"}>Hem</Link>
      <Link href={"/behandlingar"}>Behandlingar</Link>
      <Link href={"/aktuellt"}>Aktuellt</Link>
      <Link href={"/om-helochstark"}>Om Hel&Stark</Link>
      <Link href={"/ovrigt"}>Övrigt</Link>
    </nav>
  );
}
