/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types";
import {Card, Grid, jsx, Styled} from "theme-ui"
import {graphql, useStaticQuery} from "gatsby";
import GatsbyImage from "gatsby-image";

export const Work = ({title, description, projects}) => {

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
                    gap={2}
                    columns={[2]}>
                    {projects.map((p, index) => (
                        <div key={index}>
                            <Card>
                                asd
                            </Card>
                            <Grid
                                gap={2}
                                columns={[2, '1fr 2fr']}>
                                <Styled.h4>Asd</Styled.h4>
                                <a href="#">git</a>
                            </Grid>
                        </div>
                    ))}
                </Grid>
            </div>
        </React.Fragment>
    )
}

Work.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    projects: PropTypes.array
};

Work.defaultProps = {
    title: "",
    description: "",
    projects: []
};

export default Work;