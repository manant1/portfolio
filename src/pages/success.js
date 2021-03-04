import React from "react";
/** @jsx jsx */
import {Styled, jsx} from 'theme-ui';
import {graphql, useStaticQuery, Link} from "gatsby";
import GatsbyImage from "gatsby-image";
import {useIntl} from "gatsby-plugin-intl";
import CustomButton from "../components/button"

const Image = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "contact.png" }) {
                childImageSharp {
                    fixed(height: 200) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return <div style={{textAlign: "center"}}>
        <GatsbyImage fixed={data.placeholderImage.childImageSharp.fixed}/>
    </div>
}

const SuccessForm = (props) => {
    const intl = useIntl();

    return <div style={{position: "relative", height: "100vh", width: "100%"}}>
        <div style={{position: "absolute", width: "50%", top: "50%", left: "50%", textAlign: "center", transform: "translate(-50%, -50%)"}}>
            <Image/>
            <Styled.h1
                sx={{
                    variant: 'text.heading'
                }}>
                {intl.formatMessage({id: "formSubmittedTitle"})}
            </Styled.h1>
            <p>
                {intl.formatMessage({id: "formSubmittedMessage"})}
            </p>
            <Link to={"/"}>
                <CustomButton style={{textAlign: "center"}} variant={"primary"}>
                    {intl.formatMessage({id: "toFirstPage"})}
                </CustomButton>
            </Link>
        </div>
    </div>
}

export default SuccessForm;