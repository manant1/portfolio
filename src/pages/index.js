import * as React from "react"
import Layout from "../components/layout";
import Hero from "../components/hero";
import Introduction from "../components/introduction";
import Skills from "../components/skills";
import Work from "../components/work";
import ContactMe from "../components/contact-me";
import {graphql, useStaticQuery} from "gatsby";

const IndexPage = (props) => {

    const pageData = props.data.markdownRemark.frontmatter;

    const skills = pageData.technologies || [];

    const tools = pageData.tools || [];

    const projects = pageData.projects || [];

    return (
        <Layout>
            <Hero title={"Full-stack web developer"} text={"I design and create web applications and I love what I do"}
                  buttonText={"Say hello"} link={"/"}/>
            <div className="section-full-width">
                <Introduction title={"Hi, I’m Mantas. Nice to meet you."}
                              description={"Since beginning my journey as a freelance designer nearly 10 years ago, I’ve \n" +
                              "done remote work for agencies, consulted for startups, and collaborated with \n" +
                              "talented people to create digital products for both business and consumer use. \n" +
                              "I’m quietly confident, naturally curious, and perpetually working on improving my \n" +
                              "chops one design problem at a time.\n"}/>
            </div>
            <div className={"section"}>
                <Skills skills={skills} tools={tools}/>
            </div>
            <div className={"section-full-width"}>
                <Work title="My recent work"
                      description="Here are a few design projects I’ve worked on recently. Want to see more? Email me."
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
    query ($locale: String) {
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
`
