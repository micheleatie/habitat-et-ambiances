import { renderToString } from "react-dom/server";
import { routes, type Route } from "./routes";

export const routeNames = Object.keys(routes);
export function render(route: Route) {
  const Page = routes[route];
  return renderToString(<Page />);
}
