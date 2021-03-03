/* @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import {injectIntl} from "gatsby-plugin-intl"
import Header from "./header"
import "./layout.css"
import {graphql, useStaticQuery} from "gatsby";
import GatsbyImage from "gatsby-image";
import {Styled, jsx} from "theme-ui";
import {useIntl} from "gatsby-plugin-intl";

const Layout = ({children}) => {
    const Logo = () => {
        const data = useStaticQuery(graphql`
            query {
                placeholderImage: file(relativePath: { eq: "logo.png" }) {
                    childImageSharp {
                        fixed(height: 40) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `);

        return <GatsbyImage fixed={data.placeholderImage.childImageSharp.fixed}/>
    }
    const intl = useIntl();

    return (
        <>
            <Header siteTitle={intl.formatMessage({id: "title"})}/>
            <main>{children}</main>
            <footer sx={{bg: "primary", color: "white"}}>
                <div style={{textAlign: "center", padding: "40px 0px 40px 0px"}}>
                    <Logo/>
                    <Styled.p><b>{intl.formatMessage({id: "footerCitation"})}</b></Styled.p>
                    <Styled.p>{intl.formatMessage({id: "handcraftedByMe"})} © {new Date().getFullYear()}</Styled.p>
                    <Styled.p>{intl.formatMessage({id: "builtWith"})}</Styled.p>
                </div>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default injectIntl(Layout)