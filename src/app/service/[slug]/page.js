import ServiceDetailsPage from "./ServiceDetails";

export const metadata = {
  title: "Service Details",
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

const page = ({ params }) => {
  return <ServiceDetailsPage params={params} />;
};

export default page;
