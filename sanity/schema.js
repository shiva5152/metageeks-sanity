import { hero } from "./schemas/home/hero";
import { serviceHero } from "./schemas/service/hero";
import { serviceProcess } from "./schemas/service/process";
import { blog } from "./schemas/blog/blog";

export const schema = {
  types: [hero, serviceHero, serviceProcess, blog],
};
