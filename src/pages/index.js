import React from "react"
import Layout from "../components/layout"
import useInicio from "../hooks/userInicio"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import heroCSS from "../css/hero.module.css"
import ListadoPropiedades from "../components/listadoPropiedades"
import Encuentra from "../components/encuentra"

const ImageBackGround = styled(BackgroundImage)`
  height: 600px;
`

const Index = () => {
  const inicio = useInicio()
  const { nombre, contenido, imagen } = inicio[0]

  return (
    <Layout>
      <ImageBackGround tag="section" fluid={imagen.fluid} fadeIn="soft">
        <div className={heroCSS.imagenbg}>
          <h1 className={heroCSS.titulo}>
            Venta de casas y departamentos exclusivos
          </h1>
        </div>
      </ImageBackGround>
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{nombre}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >
            {contenido}
          </p>
        </div>
      </main>
      <Encuentra />
      <ListadoPropiedades />
    </Layout>
  )
}

export default Index
