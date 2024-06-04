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
import BootstrapStyleWrapper from "@/components/BoostrapStyleWarapper";

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

export const metadata = {
  title: "Example Title Home",
  description: "Example Description",
  canonical: "",
  openGraph: {
    url: "",
    title: "",
    description: "",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/jpeg",
      },
      {
        url: "",
        width: 900,
        height: 800,
        alt: "Og Image Alt Second",
        type: "image/jpeg",
      },
    ],
    siteName: "SiteName",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${hankenGrotesk.variable}`}>
      <head>
        <link
          rel="icon"
          href="/public/assets/img/sm-logo.svg"
          type="image/x-icon"
          sizes="16x16"
        />
      </head>
      <body>
        <BootstrapStyleWrapper>{children}</BootstrapStyleWrapper>
      </body>
      {/* <GoogleAnalytics gaId="G-F99PDVQRH5" /> */}
      {/* <GoogleTagManager gtmId="GTM-K5VV2K23" /> */}

      {/* <script
        type="text/javascript"
        src="https://widget.clutch.co/static/js/widget.js"
      ></script> */}
    </html>
  );
}
