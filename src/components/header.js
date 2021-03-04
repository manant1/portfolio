import {graphql, Link, useStaticQuery} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Language from "./language"
import GatsbyImage from "gatsby-image";
import {Grid} from 'theme-ui'
import {useIntl} from "gatsby-plugin-intl"
import CustomButton from "./button";
import classnames from "classnames"

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
    const [open, setOpen] = React.useState(false);

    return (
        <header
            className={"header"}
        >
            <div className={classnames("mobile-menu", "desktop-hidden")} style={{height: open ? "100vh" : "0px"}}>
                <div className={"mobile-menu-content"}>
                    <ul>
                        <li>
                            <a onClick={() => setOpen(false)} href={"#start"} style={navLinkStyle}>
                                {intl.formatMessage({id: "start"})}
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setOpen(false)} href={"#intro"} style={navLinkStyle}>
                                {intl.formatMessage({id: "intro"})}
                            </a>
                        </li>
                        <li style={{borderBottom: "1px solid lightgrey"}}>
                            <a onClick={() => setOpen(false)} href={"#work"} style={navLinkStyle}>
                                {intl.formatMessage({id: "myWork"})}
                            </a>
                        </li>
                        <li>
                            &nbsp;
                        </li>
                        <li>
                            <Grid gap={2}
                                  columns={[2]}>
                                <Language/>
                                <Link to={"say-hello"}>
                                    <CustomButton variant={"primary"}>
                                        {intl.formatMessage({id: "sayHello"})}
                                    </CustomButton>
                                </Link>
                            </Grid>
                        </li>
                    </ul>
                </div>
            </div>
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
                    <div className={"desktop-hidden"}>
                        <div id="nav-icon" onClick={() => setOpen(!open)} className={open ? "open" : ""} style={{
                            cursor: "pointer",
                            position: "absolute",
                            top: "50%",
                            right: 15,
                            transform: "translateY(-50%)"
                        }}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <Grid gap={2}
                          columns={[2, "2fr 1fr"]}>
                        <nav className={"mobile-hidden"} style={{
                            textAlign: "right",
                            display: "flex",
                            fontSize: 22,
                            fontWeight: 500,
                            justifyContent: "space-around"
                        }}>
                            <a href={"#start"} style={navLinkStyle}>
                                {intl.formatMessage({id: "start"})}
                            </a>
                            <a href={"#intro"} style={navLinkStyle}>
                                {intl.formatMessage({id: "intro"})}
                            </a>
                            <a href={"#work"} style={navLinkStyle}>
                                {intl.formatMessage({id: "myWork"})}
                            </a>
                        </nav>
                        <div className={"mobile-hidden"} style={{margin: "auto"}}>
                            <Language/>
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