export const useReplaceCamelWithSpaces = (colorName) => {
    colorName.replace(/\B[A-Z]\B/g, ' $1');
    return colorName;
};