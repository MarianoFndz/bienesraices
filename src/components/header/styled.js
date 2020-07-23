import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/core"

export const Logo = styled(Link)`
  color: #fff;
  font-size: 3rem;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
`
export const Contenido = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const header = css`
  background-color: #0d283b;
  padding: 1rem;
`
