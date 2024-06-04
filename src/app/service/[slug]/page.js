import ServiceDetailsPage from "./ServiceDetails";
import { client } from "../../../../sanity/lib/client";

async function getService(slug) {
  const query = `
 *[_type == "serviceHero" && slug.current == "${slug}"] {
    
    ServiceMetadata->{
      title,
      description,
      canonical,
      openGraph{
        url,
        title,
        description,
        images[]{
          url,
          width,
          height,
          alt,
          type
        },
        siteName
      },
      twitter{
        handle,
        site,
        cardType
      }
    }
  }
  `;

  const response = await client.fetch(query, { cache: "no-store" });
  // console.log(response);
  return response[0];
}

export let metadata = {};

const page = async ({ params }) => {
  const service = await getService(params.slug);
  const data = service?.ServiceMetadata;

  const fetchedMetadata = {
    title: data?.title || "Service Details",
    description: data?.description || "Default Description",
    canonical: data?.canonical || "",
    openGraph: {
      url: data.openGraph?.url || "",
      title: data.openGraph?.title || "",
      description: data.openGraph?.description || "",
      images: data.openGraph?.images || [],
      siteName: data.openGraph?.siteName || "Default Site Name",
    },
    twitter: {
      handle: data.twitter?.handle || "@handle",
      site: data.twitter?.site || "@site",
      cardType: data.twitter?.cardType || "summary_large_image",
    },
  };
  metadata = fetchedMetadata;
  return <ServiceDetailsPage params={params} />;
};

export default page;
