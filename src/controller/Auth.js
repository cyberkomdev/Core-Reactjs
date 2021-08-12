import axios from "axios"

export const isLogin = user => {
    return axios
        .post('api/login', {
            username: user.username,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('isToken', res.data.access_token)
            localStorage.setItem('expire', res.data.expires_in)
        })
        .catch(function (err) {
            return err.status
        })
}