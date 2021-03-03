import React from "react"
import PropTypes from "prop-types";
/** @jsx jsx */
import {Card, Grid, Styled, jsx} from "theme-ui";

export const Skills = ({skills, tools}) => {
    return (
        <Card className={"skills-card"}>
            <div
                sx={{
                    display: 'grid',
                    gridTemplateColumns: [
                        'auto',
                        '1fr 1fr'
                    ]
                }}>
                {(skills && skills.length > 0) && skills.map((s, index) => (
                    <div key={index} className={"skills-col"} style={{
                        height: "100%",
                        textAlign: "center"
                    }}>
                        <Styled.h3 sx={{
                            variant: 'text.heading'
                        }}>{s.title}</Styled.h3>
                        <p>{s.description}</p>
                        <Styled.h4 sx={{
                            color: "primary",
                            variant: 'text.heading'
                        }}>I have experience with:</Styled.h4>
                        {s.names.map((n, index2) => (
                            <React.Fragment key={index + "-" + index2}>
                                <span>{n}</span><br/>
                            </React.Fragment>
                        ))}
                        <br/>
                    </div>
                ))}
            </div>
            <div style={{textAlign: "center", padding: "15px"}}>
                <Styled.h4 sx={{
                    color: "primary",
                    variant: 'text.heading'
                }}>Development tools:</Styled.h4>
                {tools.map((t, index) => (
                    <span key={index}>{t}{index + 1 !== tools.length && (<>, </>)}</span>
                ))}
            </div>
        </Card>
    )
}

Skills.propTypes = {
    skills: PropTypes.array,
    tools: PropTypes.array
};

Skills.defaultProps = {
    skills: [],
    tools: []
};

export default Skills;