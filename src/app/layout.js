"use client";
import { useEffect } from "react";
import { Inter, Roboto_Mono, Hanken_Grotesk } from "next/font/google";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap-datetimepicker.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../public/assets/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import "../../public/assets/css/style.css";
import "react-toastify/dist/ReactToastify.css";
import ScrollProgress from "@/components/common/ScrollProgress";
import useWow from "@/hooks/useWow";
import { ToastContainer } from "react-toastify";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hankenGrotesk",
  display: "swap",
});
export default function RootLayout({ children }) {
  useWow();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en" className={`${inter.variable} ${hankenGrotesk.variable}`}>
      <head>
        <link
          rel="icon"
          href="/public/assets/img/sm-logo.svg"
          type="image/x-icon"
          sizes="16x16"
        />
        <title>
          Metageeks Technologies | Blockchain, Custom Software & AI Solutions
        </title>
      </head>
      <body>
        <ScrollProgress />
        {children}
        <ToastContainer />
      </body>
      {/* <GoogleTagManager gtmId="GTM-K5VV2K23" /> */}

      {/* <script
        type="text/javascript"
        src="https://widget.clutch.co/static/js/widget.js"
      ></script> */}
    </html>
  );
}
