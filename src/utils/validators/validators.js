export const required = (value) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLength30 = (value) => {
    if (value && value.lenght > 30) return 'Max length is 30 symbols'
    return undefined
}

export const minLength1 = (value) => {
    if (value && value.lenght < 1) return 'Min length is 1 symbol'
    return undefined
}
