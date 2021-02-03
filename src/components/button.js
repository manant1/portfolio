import React, {useState} from "react"
import {Button} from "theme-ui"
import PropTypes from "prop-types";

export const CustomButton = ({children, style}) => {
    const [hover, setOnHover] = useState(false);

    return (
        <Button onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} variant={"primary"} sx={{
            border: "1px solid",
            borderRadius: 20,
            paddingLeft: "25px",
            paddingRight: "25px"
        }}>
            {children}
        </Button>
    )
}

CustomButton.propTypes = {
    variant: PropTypes.string
};

CustomButton.defaultProps = {
    variant: "primary"
};

export default CustomButton;