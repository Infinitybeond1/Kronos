import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Kronos",
  viewport: "width=device-width, initial-scale=1.0",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
          * {
            font-family: 'Rubik', sans-serif;
          }
        `}
      </style>
    </html>
  );
}
