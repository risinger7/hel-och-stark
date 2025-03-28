import { Playwrite_DE_Grund, Lexend_Deca } from "next/font/google";
/* import localFont from "next/font/local"; */

//playwrite
const playwrite200 = Playwrite_DE_Grund({ weight: "200" });
const playwrite400 = Playwrite_DE_Grund({ weight: "400" });
//lexend
const lexend200 = Lexend_Deca({ subsets: ["latin"], weight: "200" });
const lexend300 = Lexend_Deca({ subsets: ["latin"], weight: "300" });
const lexend400 = Lexend_Deca({ subsets: ["latin"], weight: "400" });
const lexend700 = Lexend_Deca({ subsets: ["latin"], weight: "700" });

export {
  playwrite200,
  playwrite400,
  lexend200,
  lexend300,
  lexend400,
  lexend700,
};
