import React from 'react'

const Button = props => {
    let coreClasses = ['inline-block', 'border', 'border-gray-200', 'rounded', 'px-4', 'py-2', 'hover:bg-gray-50', 'transition-all', 'duration-200'];
    let classes;

    if (props.classes) {
        classes = [...coreClasses, ...props.classes];
    }

    return (
        <a href={ props.link } className={classes.join(" ")}>{ props.children }</a>
    )
}

export default Button;