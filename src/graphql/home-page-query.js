import {graphql} from "gatsby";

export const homePageQuery = () => (graphql`
    query HomePageQuery($locale: String) {
        markdownRemark(frontmatter: {locale: {eq: $locale}}) {
            frontmatter {
                heroDescription
                heroTitle
                introDescription
                introTitle
                projects {
                    image
                    link
                    name
                    repo
                }
                projectsDescription
                projectsTitle
                technologies {
                    description
                    name
                    type
                }
                title
                tools
            }
        }
    }
`)
