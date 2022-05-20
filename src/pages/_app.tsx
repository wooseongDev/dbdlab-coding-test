import { AppLayout } from '@components/app-layout'
import { Global } from '@emotion/react'
import { globalStyle } from '@styles/global-style'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

const App: React.FC<AppProps> = (prop) => {
  const { Component, pageProps } = prop

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>디비디랩 프론트엔드 사전과제</title>
        <meta name="description" content="디비디랩 프론트엔드 사전과제" />
      </Head>

      <Global styles={globalStyle} />

      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default App
