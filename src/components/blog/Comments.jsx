"use client";
import React from "react";
import { DiscussionEmbed } from "disqus-react";

const Comments = ({ url, identifier, title }) => {
  const config = {
    url: url,
    identifier: identifier,
    title: title,
    language: "en",
  };
  return (
    <div>
      <DiscussionEmbed shortname="metageeks-1" config={config} />
    </div>
  );
};

export default Comments;
