import { graphql, useStaticQuery } from "gatsby"

const useIconos = () => {
  const { iconos } = useStaticQuery(graphql`
    query {
      iconos: allFile(filter: { relativeDirectory: { eq: "iconos" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)

  return {
    iconos,
  }
}

export default useIconos
