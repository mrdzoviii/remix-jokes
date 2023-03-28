import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet } from "@remix-run/react";

import globalLargeStyles from "~/styles/global-large.css";
import globalMediumStyles from "~/styles/global-medium.css";
import globalStyles from "~/styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
  {
    rel: "stylesheet",
    href: globalMediumStyles,
    media: "print, (min-width: 640px)",
  },
  { rel: "stylesheet", href: globalLargeStyles, media: "(min-width: 1024px)" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Remix: So great, it's funny!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* <Scripts /> */}
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
