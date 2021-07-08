import React from 'react'

const Button = ({ link, classes, children }) => {
    let coreClasses = ['inline-block', 'border', 'border-gray-400', 'rounded', 'px-4', 'py-1', 'hover:text-50', 'hover:bg-gray-50', 'transition-all', 'duration-200'];

    if (classes) {
        classes = [...coreClasses, ...classes];
    } else {
        classes = coreClasses;
    }

    return (
        <a href={ link } className={classes ? classes.join(" ") : null}>{ children }</a>
    )
}

export default Button;