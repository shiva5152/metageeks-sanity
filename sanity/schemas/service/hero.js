export const serviceHero = {
  name: "serviceHero",
  title: "Service Hero",
  type: "document",

  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required().error("Required"),
    },

    {
      name: "paragraph",
      title: "Paragraph",
      type: "text",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "url",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "faqImage",
      title: "Faq Image",
      type: "url",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "serviceProcess",
      title: "Service Process",
      type: "reference",
      to: [{ type: "serviceProcess" }],
    },
  ],
};
