/* @jsx jsx */
import React from "react"
import {Styled, jsx} from "theme-ui"
import PropTypes from "prop-types";
import CustomButton from "./button";
import {graphql, useStaticQuery, Link} from "gatsby";
import GatsbyImage from "gatsby-image";

export const ContactMe = ({title, description, buttonText, link}) => {
    const ContactImage = () => {
        const data = useStaticQuery(graphql`
            query {
                placeholderImage: file(relativePath: { eq: "contact-me.png" }) {
                    childImageSharp {
                        fixed(height: 150) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `);

        return <div className={"contact-me"}>
            <GatsbyImage fixed={data.placeholderImage.childImageSharp.fixed}/>
        </div>
    }

    return (
        <div style={{textAlign: "center"}}>
            <ContactImage/>
            <Styled.h3 sx={{variant: "text.heading"}}>
                {title}
            </Styled.h3>
            <Styled.p style={{width: "75%", margin: "20px auto"}}>
                {description}
            </Styled.p>
            <Link to={"say-hello"}>
            <CustomButton variant={"primary"}>
                {buttonText}
            </CustomButton>
            </Link>
        </div>
    )
}

ContactMe.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    link: PropTypes.string
};

ContactMe.defaultProps = {
    title: "",
    description: "",
    buttonText: "",
    link: ""
};

export default ContactMe;