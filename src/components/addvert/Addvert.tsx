"use client";
import Link from "next/link";
import Image from "next/image";
import { lexend200 } from "../fonts/fonts";
import "./addvert-style.css";
import { usePathname } from "next/navigation";

export default function Addvert() {
    const pathname = usePathname();

    // Helper function to determine props for a link
    const getLinkProps = (internalUrl: string, externalUrl: string) => {
        const url = pathname === "/" ? internalUrl : externalUrl;
        const isExternal = url.startsWith("http");
        return {
            href: url,
            ...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {}),
        };
    };

    return (
        <div className="addvert-wrapper">
            <div className="addvert-text">
                <p className={lexend200.className}>Ansluten till</p>
            </div>
            <div className="logotype-container">
                <Link
                    className="logotype-wrapper"
                    {...getLinkProps("/aktuellt", "https://www.epassi.se/sv/")}
                >
                    <div>
                        <Image
                            src="/epassi.png"
                            alt="Epassi Logo"
                            className="logotype-image make-logo-smaller"
                            fill
                        />
                    </div>
                </Link>

                <Link
                    className="logotype-wrapper"
                    {...getLinkProps("/aktuellt", "https://www.wellnet.se")}
                >
                    <Image
                        src="/wellnet.png"
                        alt="Wellnet Logo"
                        fill
                        className="logotype-image"
                    />
                </Link>
            </div>
        </div>
    );
}
