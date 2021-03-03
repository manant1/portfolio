import {graphql, Link, useStaticQuery} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Language from "./language"
import GatsbyImage from "gatsby-image";
import {Grid} from 'theme-ui'
import { useIntl } from "gatsby-plugin-intl"

const navLinkStyle = {
    color: `black`,
    textDecoration: `none`,
    lineHeight: "100px",
    fontSize: 15,
    textTransform: "capitalize"
};

const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "logo-letter.png" }) {
                childImageSharp {
                    fixed(height: 75) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return <GatsbyImage fixed={data.placeholderImage.childImageSharp.fixed}/>
}

const Header = () => {
    const intl = useIntl();

    return (
        <header
            style={{
                background: `white`,
                height: 100,
                position: "fixed",
                boxShadow: "0px 0px 8px 0px lightgrey",
                width: "100%",
                zIndex: 1000
            }}
        >
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960
                }}
            >
                <Grid
                    gap={2}
                    columns={[2]}>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            position: "relative",
                            textDecoration: `none`,
                            height: "75px",
                            margin: "auto 0"
                        }}
                    >
                        <Logo className={"top-middle"}/>
                    </Link>
                    <Grid gap={2}
                          columns={[2, "2fr 1fr"]}>
                        <nav className={"mobile-hidden"} style={{textAlign: "right", display: "flex", fontSize: 22, fontWeight: 500, justifyContent: "space-around"}}>
                            <a href={"#start"} style={navLinkStyle}>
                                {intl.formatMessage({ id: "start" })}
                            </a>
                            <a href={"#intro"} style={navLinkStyle}>
                                {intl.formatMessage({ id: "intro" })}
                            </a>
                            <a href={"#work"} style={navLinkStyle}>
                                {intl.formatMessage({ id: "myWork" })}
                            </a>
                        </nav>
                        <div className={"mobile-hidden"} style={{margin: "auto"}}>
                            <Language />
                        </div>
                    </Grid>
                </Grid>

            </div>
        </header>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string
}

Header.defaultProps = {
    siteTitle: ``
}

export default Header