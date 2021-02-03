import React from "react"
import PropTypes from "prop-types";
import theme from "../gatsby-plugin-theme-ui/index";
/** @jsx jsx */
import {Styled, jsx} from "theme-ui"
import {graphql, useStaticQuery} from "gatsby";
import GatsbyImage from "gatsby-image";

const IntroImage = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "intro.png" }) {
                childImageSharp {
                    fixed(height: 225) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return <div className={"intro-img"}>
        <GatsbyImage fixed={data.placeholderImage.childImageSharp.fixed}/>
    </div>
}

export const Introduction = ({title, description}) => {
    const style = {
        background: theme.colors.primary,
        color: theme.colors.text,
        textAlign: "center",
        paddingTop: "100px",
        paddingBottom: "150px",
    };

    return (
        <div style={style}>
            <div className="section" style={{padding: "10px"}}>
                <Styled.h3 sx={{
                    color: "white",
                    variant: 'text.heading'
                }}>{title}</Styled.h3>
                <Styled.p sx={{color: "white"}}>{description}</Styled.p>
                <IntroImage/>
            </div>
        </div>
    )
}

Introduction.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

Introduction.defaultProps = {
    title: "",
    description: ""
};

export default Introduction;