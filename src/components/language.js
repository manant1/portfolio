import React from "react"
import {changeLocale, IntlContextConsumer, useIntl} from "gatsby-plugin-intl"
import {Select} from 'theme-ui'

const Language = () => {
    const intl = useIntl();
    const languageName = {
        lt: intl.formatMessage({id: "lt"}),
        en: intl.formatMessage({id: "en"})
    };

    return (
        <IntlContextConsumer>
            {({languages, language: currentLocale}) => (
                <Select style={{width: 120}} onChange={($event) => changeLocale($event.target.value)} defaultValue={currentLocale}>
                    {languages.map((language, index) => (
                        <option
                            key={index}
                            value={language}
                        >
                            {languageName[language]}
                        </option>
                    ))}
                </Select>
            )}
        </IntlContextConsumer>
    )
}

export default Language