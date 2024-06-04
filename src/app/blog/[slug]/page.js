import React from "react";
import BlogPage from "./BlogDetails";
import { client } from "../../../../sanity/lib/client";

async function getPost(slug) {
  const query = `
    *[_type=="blog" && slug.current=="${slug}"]{
    title,
    description,
    blogMetadata->{
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
  return response[0];
}
export let metadata = {};

const page = async ({ params }) => {
  console.log("blog page Details", params.slug);
  const blog = await getPost(params.slug);
  const data = blog?.blogMetadata;

  const fetchedMetadata = {
    title: blog?.title || "Default ",
    description: blog?.description || "Default Description",
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
  return <BlogPage />;
};

export default page;
