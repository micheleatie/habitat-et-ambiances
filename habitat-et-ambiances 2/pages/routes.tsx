import Home from "../app/page";
import Index from "../app/index/page";
import Habitat from "../app/habiter/page";
import Experts from "../app/experts/page";
import Collaboration from "../app/collaborer/page";
import Policy from "../app/donnees/page";

export const routes = {
  "": Home,
  index: Index,
  habiter: Habitat,
  experts: Experts,
  collaborer: Collaboration,
  donnees: Policy,
};
export type Route = keyof typeof routes;
