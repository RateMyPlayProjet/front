let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let saveResfreshToken = (refreshToken) => {
    localStorage.setItem('refreshToken', refreshToken)
}

let logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')

    //!! = transforme n'importe quelle variable en boolean
    return !!token
}

export const accountService = {
    saveToken, logout, isLogged, saveResfreshToken
}