import * as React from "react"
import {useRef} from "react"
import Layout from "../components/layout";
import Hero from "../components/hero";
import Introduction from "../components/introduction";
import Skills from "../components/skills";
import Work from "../components/work";
import ContactMe from "../components/contact-me";
import {graphql} from "gatsby";
import {useIntl} from "gatsby-plugin-intl";

const IndexPage = (props) => {
    const pageData = props.data.markdownRemark.frontmatter;
    const skills = pageData.technologies || [];
    const tools = pageData.tools || [];
    const projects = pageData.projects || [];
    const intl = useIntl();
    const workSectionRef = useRef(null);
    const aboutMeRef = useRef(null);

    if (typeof window !== "undefined") {
        const href = window.location.href;
        if (href.includes("#work")) {
            workSectionRef.current && workSectionRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        } else if (href.includes("#intro")) {
            aboutMeRef.current && aboutMeRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        } else if (href.includes("#start")) {
            window.scrollTo(0, 0);
        }
    }

    return (
        <Layout>
            <Hero title={pageData.heroTitle} text={pageData.heroDescription}
                  buttonText={intl.formatMessage({id: "sayHello"})} link={"say-hello"}/>
            <div ref={aboutMeRef} className="section-full-width">
                <Introduction title={pageData.introTitle}
                              description={pageData.introDescription}/>
            </div>
            <div className={"section"}>
                <Skills skills={skills} tools={tools}/>
            </div>
            <div ref={workSectionRef} className={"section-full-width"} id="work">
                <Work title={pageData.projectsTitle}
                      images={props.data.allImageSharp.nodes}
                      description={pageData.projectsDescription}
                      projects={projects}/>
            </div>
            <div className={"section-full-width"}>
                <ContactMe title={intl.formatMessage({id: "interestedInCalaborating"})}
                           description={intl.formatMessage({id: "discussOpportunities"})}
                           buttonText={intl.formatMessage({id: "sayHello"})}/>
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
        allImageSharp {
            nodes {
                fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                }
                original {
                    src
                }
            }
        }
    }
`
