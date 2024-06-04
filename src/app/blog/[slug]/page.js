import React from "react";
import BlogPage from "./BlogDetails";
import { client } from "../../../../sanity/lib/client";

const getMetaData = async () => {
  const query = `*[_type == "metadata" && metadataFor=="blogDetails"]{
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
    }`;

  const response = await client.fetch(query, { cache: "no-store" });
  console.log(response);
  return response[0];
};
async function getPost(slug) {
  const query = `
    *[_type=="blog" && slug.current=="${slug}"]{
    title,
    description,
  } 
  `;

  const response = await client.fetch(query);
  return response[0];
}
export let metadata = {};

const page = async ({ params }) => {
  console.log("blog page Details", params.slug);
  const data = await getMetaData();
  const blog = await getPost(params.slug);

  const fetchedMetadata = {
    title: "Blog Details | " + blog.title || "Default ",
    description: blog.description || "Default Description",
    canonical: data.canonical || "",
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
