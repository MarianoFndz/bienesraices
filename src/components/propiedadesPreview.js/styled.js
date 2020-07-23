import styled from "@emotion/styled"
import { Link } from "gatsby"

export const Card = styled.div`
  border: 1px solid #e1e1e1;
  img {
    max-width: 100%;
  }
`

export const Contenido = styled.div`
  padding: 2rem;
  h3 {
    font-family: "Lato", sans-serif;
    margin: 0 0 2rem 0;
    font-size: 2.4rem;
  }
  .precio {
    font-size: 2rem;
    color: #75ab00;
  }
`

export const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #75ab00;
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`
