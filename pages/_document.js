import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      <body className="bg-fixed bg-gradient-to-tl from-indigo-500 via-pink-500 to-purple-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
