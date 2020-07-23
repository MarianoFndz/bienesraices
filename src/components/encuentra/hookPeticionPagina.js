import { graphql, useStaticQuery } from "gatsby"

const useEncuentra = () => {
  const { imagen } = useStaticQuery(graphql`
    query {
      imagen: file(relativePath: { eq: "encuentra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return {
    imagen,
  }
}

export default useEncuentra
