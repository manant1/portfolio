/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types";
import {Card, Grid, jsx, Styled} from "theme-ui"
import {graphql, useStaticQuery} from "gatsby";
import GatsbyImage from "gatsby-image";
import {LinkOut, GithubFill} from "akar-icons";

export const Work = ({title, description, images, projects}) => {

    const Image = () => {
        const data = useStaticQuery(graphql`
            query {
                placeholderImage: file(relativePath: { eq: "watercooler.png" }) {
                    childImageSharp {
                        fixed(height: 151) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `);

        return <div className={"work-img"}>
            <GatsbyImage fixed={data.placeholderImage.childImageSharp.fixed}/>
        </div>
    }

    return (
        <React.Fragment>
            <Image/>
            <div className={"section"}>
                <div style={{textAlign: "center"}}>
                    <Styled.h3 jsx={{variant: 'text.heading'}}>{title}</Styled.h3>
                    <Styled.p>{description}</Styled.p>
                </div>
                <Grid
                    gap={4}
                    columns={[1, null, 2]}>
                    {projects.map((p, index) => {
                        return (
                            <div key={index}>
                                <Card style={{textAlign: "center", borderRadius: 10, height: 250, padding: "0"}}>
                                    <div className={"project-img-container"}>
                                        <img style={{height: 250, borderRadius: 10, objectFit: "cover", width: "100%"}} src={p.image}
                                             alt="project illiustration"/>
                                        <div>
                                            <div className={"project-img-links"}>
                                                <a href={p.link} target="_blank">
                                                    <LinkOut/>
                                                </a>
                                                {p.repo && <a href={p.repo} target="_blank">
                                                    <GithubFill/>
                                                </a>}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                <Grid
                                    gap={2}
                                    columns={[2, "2fr 1fr"]}>
                                    <a className={"link-no-style"} href={p.link} target="_blank">
                                        <Styled.h4 style={{margin: "15px 10px", fontSize: "0.975rem"}}>{p.name}</Styled.h4>
                                    </a>
                                    <div style={{position: "relative", marginRight: 10}}>
                                        {p.repo && <a target="_blank" style={{position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)"}} href={p.repo}>
                                            <GithubFill/>
                                        </a>}
                                    </div>
                                </Grid>
                            </div>
                        )
                    })}
                </Grid>
            </div>
        </React.Fragment>
    )
}

Work.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    projects: PropTypes.array,
    images: PropTypes.array
};

Work.defaultProps = {
    title: "",
    description: "",
    projects: [],
    images: []
};

export default Work;