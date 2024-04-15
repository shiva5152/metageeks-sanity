import { hero } from "./schemas/home/hero";
import { serviceHero } from "./schemas/service/hero";
import { serviceProcess } from "./schemas/service/process";
import { blog } from "./schemas/blog/blog";
import { serviceTechStack } from "./schemas/service/tech";

export const schema = {
  types: [hero, serviceHero, serviceProcess, blog, serviceTechStack],
};
