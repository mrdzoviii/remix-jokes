import type { MetaFunction } from "@remix-run/node";
import { LiveReload } from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Jokes",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <body>
        Hello world
        <LiveReload />
      </body>
    </html>
  );
}
