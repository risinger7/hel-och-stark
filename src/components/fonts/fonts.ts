import {
  Noto_Sans,
  Kanit,
  Pacifico,
  Encode_Sans_SC,
  Roboto,
} from "next/font/google";
/* import localFont from "next/font/local"; */

// define weights of a non-variable font
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const encodeSans400 = Encode_Sans_SC({ subsets: ["latin"], weight: "400" });
const encodeSans700 = Encode_Sans_SC({ subsets: ["latin"], weight: "700" });
// Noto
const noto400 = Noto_Sans({ subsets: ["latin"], weight: "400" });
const noto700 = Noto_Sans({ subsets: ["latin"], weight: "700" });
// Kanit
const kanit400 = Kanit({ subsets: ["latin"], weight: "400" });
const kanit700 = Kanit({ subsets: ["latin"], weight: "700" });
//roboto
const roboto400 = Roboto({ subsets: ["latin"], weight: "400" });
const roboto700 = Roboto({ subsets: ["latin"], weight: "700" });

export {
  pacifico,
  kanit400,
  kanit700,
  noto400,
  noto700,
  encodeSans400,
  encodeSans700,
  roboto400,
  roboto700,
};
