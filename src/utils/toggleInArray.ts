export const toggleInArray = (value: any, array: any[], onlyOneSelect: boolean = false): any[] => {
    const toggled = array.includes(value) ? array.filter(i => i !== value) : [value, ...array]
    return toggled.slice(0, (onlyOneSelect ? 1 : undefined))
}