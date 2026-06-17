import { Cormorant_Garamond, Josefin_Sans } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300"],
  variable: "--font-josefin",
});
