import React from "react"
import {changeLocale, IntlContextConsumer, useIntl} from "gatsby-plugin-intl"

const Language = () => {
    const intl = useIntl();
    const languageName = {
        lt: intl.formatMessage({id: "lt"}),
        en: intl.formatMessage({id: "en"})
    };

    return (
        <div>
            <IntlContextConsumer>
                {({languages, language: currentLocale}) =>
                    languages.map(language => (
                        <a
                            key={language}
                            onClick={() => changeLocale(language)}
                            style={{
                                color: currentLocale === language ? `yellow` : `white`,
                                margin: 10,
                                textDecoration: `underline`,
                                cursor: `pointer`,
                            }}
                        >
                            {languageName[language]}
                        </a>
                    ))
                }
            </IntlContextConsumer>
        </div>
    )
}

export default Language