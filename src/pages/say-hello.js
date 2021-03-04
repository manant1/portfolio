import React from "react";
import Layout from "../components/layout";
import {Grid, Checkbox, Input, Label, Textarea, Button, jsx} from "theme-ui";
import {graphql, useStaticQuery} from "gatsby";
import GatsbyImage from "gatsby-image";
import {useIntl} from "gatsby-plugin-intl";
import CustomButton from "../components/button";

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

    return <div>
        <GatsbyImage fixed={data.placeholderImage.childImageSharp.fixed}/>
    </div>
}

const SayHello = (props) => {
    const intl = useIntl();

    return <Layout>
        <div className={"say-hello-section"}>
            <div style={{textAlign: "center"}}>
                <Image/>
            </div>
            <Grid gap={2} columns={[1, null, 2]}>
                <div>
                    <ul className={"personal-info-list"}>
                        <li><b>{intl.formatMessage({id: "name"})}</b><p>Mantas Antanaitis</p></li>
                        <li><b>{intl.formatMessage({id: "email"})}</b><p>antanaitis.web@gmail.com</p></li>
                        <li><b>{intl.formatMessage({id: "phoneNumber"})}</b><p>+37064115628</p></li>
                        <li><b>{intl.formatMessage({id: "individualActivityNumber"})}</b><p>934010</p></li>
                    </ul>
                </div>
                <div>
                    <form name="contact" method="post" data-netlify="true"
                          data-netlify-honeypot="bot-field">
                        <Label htmlFor='username'>{intl.formatMessage({id: "name"})}</Label>
                        <Input
                            id="name"
                            type="fname"
                            name="name"
                        />
                        <Label htmlFor='username'>{intl.formatMessage({id: "email"})}</Label>
                        <Input
                            name='email'
                            type="email"
                            id="email"
                            mb={3}
                        />
                        <Label htmlFor='username'>{intl.formatMessage({id: "message"})}</Label>
                        <Textarea
                            id="message"
                            name='message'
                            rows='6'
                            mb={3}
                        />
                        <CustomButton style={{float: "right"}} variant={"primary"}>
                            {intl.formatMessage({id: "send"})}
                        </CustomButton>
                        <input type="hidden" name="form-name" value="contact"/>
                    </form>
                </div>
            </Grid>
        </div>
    </Layout>
}

export default SayHello;