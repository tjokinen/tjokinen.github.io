import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          </Head>
          <body className="bg-dark text-white font-mono">
            <Main />
            <NextScript />
          </body>
        </Html>
        )
}
