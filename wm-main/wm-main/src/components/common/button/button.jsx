import React from "react"
import "./button.scss"

export const Button = (props) => {
    return (
        <a {...props} className="btn">
            {props.children}
        </a>
    );
}
