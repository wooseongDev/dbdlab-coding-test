import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Red+Hat+Display:wght@400;500;700&display=swap"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
