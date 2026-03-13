import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#06070A" />
        <meta name="format-detection" content="telephone=yes" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
