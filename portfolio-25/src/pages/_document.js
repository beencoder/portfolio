import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko" data-scroll-behavior="smooth">
      <Head />
      <body>
        <Main />
        <div id="modal-root"></div>
        <div id="tooltip-root"></div>
        <NextScript />
      </body>
    </Html>
  );
}
