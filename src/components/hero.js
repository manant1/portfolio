import React from "react"
import PropTypes from "prop-types";
/** @jsx jsx */
import {Styled, jsx} from 'theme-ui';
import {graphql, Link, useStaticQuery} from "gatsby"
import CustomButton from "./button";
import GatsbyImage from "gatsby-image";

const HeroImage = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "hero.png" }) {
                childImageSharp {
                    fixed(height: 250) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return <div className={"hero-img"}>
        <GatsbyImage fixed={data.placeholderImage.childImageSharp.fixed}/>
    </div>
}

const Hero = ({title, text, link, buttonText}) => {
    return (
        <div style={{textAlign: "center", height: "calc(100vh - 100px)", background: "white"}}>
            <HeroImage/>
            <div className={"center"} style={{width: "90%"}}>
                <Styled.h1
                    className={"hero-title"}
                    sx={{
                        variant: 'text.heading'
                    }}>
                    {title}
                </Styled.h1>
                <Styled.p>{text}</Styled.p>
                <Link to={link}>
                    <CustomButton variant={"primary"}>
                        {buttonText}
                    </CustomButton>
                </Link>
            </div>
        </div>
    )
};

Hero.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
    link: PropTypes.string
};

Hero.defaultProps = {
    title: "",
    text: "",
    buttonText: "",
    link: ""
};

export default Hero;