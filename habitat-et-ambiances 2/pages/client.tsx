import { hydrateRoot } from "react-dom/client";
import { routes, type Route } from "./routes";
import "../app/globals.css";

const path = window.location.pathname.replace(import.meta.env.BASE_URL, "").replace(/\/$/, "");
const key = path === "index.html" ? "" : path.replace(/\/index\.html$/, "");
const Page = routes[key as Route];
if (Page) hydrateRoot(document.getElementById("root")!, <Page />);
