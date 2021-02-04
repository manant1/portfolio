import * as React from "react"
import Layout from "../components/layout";
import Hero from "../components/hero";
import Introduction from "../components/introduction";
import Skills from "../components/skills";
import Work from "../components/work";
import ContactMe from "../components/contact-me";
import {graphql} from "gatsby";

const IndexPage = (props) => {

    const pageData = props.data.markdownRemark.frontmatter;

    const skills = pageData.technologies || [];

    const tools = pageData.tools || [];

    const projects = pageData.projects || [];

    return (
        <Layout>
            <Hero title={pageData.heroTitle} text={pageData.heroDescription}
                  buttonText={"Say hello"} link={"/"}/>
            <div className="section-full-width">
                <Introduction title={pageData.introTitle}
                              description={pageData.introDescription}/>
            </div>
            <div className={"section"}>
                <Skills skills={skills} tools={tools}/>
            </div>
            <div className={"section-full-width"}>
                <Work title={pageData.projectsTitle}
                      description={pageData.projectsDescription}
                      projects={projects}/>
            </div>
            <div className={"section-full-width"}>
                <ContactMe title={"Interested in collaborating?"}
                           description={"I’m always open to discussing product design work or partnership opportunities."}
                           buttonText={"Say hello"}/>
            </div>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    query ($language: String) {
        markdownRemark(frontmatter: {locale: {eq: $language}}) {
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
                    names
                    type
                }
                title
                tools
            }
        }
    }
`
