import { hero } from "./schemas/home/hero";
import { serviceHero } from "./schemas/service/hero";
import { serviceProcess } from "./schemas/service/process";
import { blog } from "./schemas/blog/blog";
import { serviceTechStack } from "./schemas/service/tech";
import { caseStudy } from "./schemas/case-study/case-study";
import { testimonial } from "./schemas/testimonial/testimonial";
import { metadata } from "./schemas/metadata/metadata";

export const schema = {
  types: [
    hero,
    serviceHero,
    serviceProcess,
    blog,
    serviceTechStack,
    caseStudy,
    testimonial,
    metadata,
  ],
};
