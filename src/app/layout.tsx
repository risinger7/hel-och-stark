import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
    metadataBase: new URL("https://helochstark.se"),
    title: {
        default: "Hel & Stark Massageterapi i Bromma | Stockholm",
        template: "%s | Hel & Stark Massageterapi Bromma",
    },
    description:
        "Varmt välkommen till Hel & Stark massageterapi & rehab i Bromma, Stockholm. Vi erbjuder klassisk massage, terapeutisk massageterapi, lymfmassage, gravidmassage, idrottsmassage och käkledsbehandling med personligt bemötande och individanpassad behandling.",
    keywords: [
        "Massage Bromma",
        "Massageterapi Stockholm",
        "Terapeutisk massage Bromma",
        "Gravidmassage Bromma",
        "Idrottsmassage Stockholm",
        "Lymfmassage Bromma",
        "Käkledsbehandling Stockholm",
        "Företagsmassage Bromma",
    ],
    openGraph: {
        title: "Hel & Stark - Massageterapi - Bromma | Stockholm",
        description:
            "Diplomerad medicinsk massageterapeut i Bromma, Stockholm. Vi erbjuder klassisk svensk massage, terapeutisk massage, idrottsmassage, lymfmassage, gravidmassage och företagsmassage.",
        url: "https://helochstark.se",
        siteName: "Hel & Stark Massageterapi",
        images: [
            {
                url: "/hel1.png",
                width: 1200,
                height: 630,
                alt: "Hel & Stark Massageterapi i Bromma",
            },
            {
                url: "/hero2.jpg",
                width: 1200,
                height: 630,
                alt: "Hel & Stark Massageterapi i Bromma",
            },
        ],
        locale: "sv_SE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hel & Stark Massageterapi i Bromma",
        description:
            "Personligt bemötande och individanpassad behandling – massage, lymfmassage, idrottsmassage, gravidmassage och mer i Bromma, Stockholm.",
        images: ["/hel1.png", "/hero2.jpg"],
        creator: "",
    },
    alternates: {
        canonical: "https://helochstark.se",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-32x32.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="sv">
            <head>
                <Script
                    id="local-business"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Hel & Stark Massageterapi",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "Din adress",
                                addressLocality: "Bromma",
                                addressRegion: "Stockholm",
                                postalCode: "12345",
                                addressCountry: "SE",
                            },
                            telephone: "+4670xxxxxxx",
                            url: "https://helochstark.se",
                            description:
                                "Massage och massageterapi i Bromma, Stockholm. Gravidmassage, lymfmassage, idrottsmassage.",
                        }),
                    }}
                />
            </head>
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}
