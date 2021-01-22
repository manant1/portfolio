import * as React from "react"
import {useIntl} from "gatsby-plugin-intl";
import Layout from "../components/layout";

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const IndexPage = () => {
    const intl = useIntl();
    return (
        <Layout style={pageStyles}>
            <title>{intl.formatMessage({id: "title"})}</title>
            <h1 style={headingStyles}>{intl.formatMessage({id: "home.title"})}</h1>
        </Layout>
    )
}

export default IndexPage
