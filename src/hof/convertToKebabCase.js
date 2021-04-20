const convertToKebabCase = (string) => {
    return string.replace(/\s+/g, '-').toLowerCase();
}

export default convertToKebabCase;