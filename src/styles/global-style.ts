import { css } from '@emotion/react'

export const globalStyle = css`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
    background-color: #f8f8f8;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Red Hat Display', 'Noto Sans KR', sans-serif;

    * {
      box-sizing: inherit;
      font-family: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  button,
  input {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  button,
  input {
    border: none;
    outline: none;
    background-color: transparent;

    &:disabled {
      cursor: not-allowed;
    }
  }
`
