import React from "react"
import Helmet from "react-helmet"
import { Global } from "@emotion/core"
import Header from "../header"
import { globalCSS } from "./styled"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Global styles={globalCSS} />
      <Helmet>
        <title>Bienes Raices Gatsby</title>
        <meta
          name="description"
          content="Sitio web de vienes raices en gatsby"
        ></meta>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      {children}
    </>
  )
}

export default Layout
