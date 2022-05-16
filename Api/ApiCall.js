import axios from 'axios'

export async function createUser(data) {
    const answer = await axios.post(`https://digitalcampus.nerdy-bear.com/api/auth/local/register`, data)
    return answer.data
}

export async function getUser(data) {
    const answer = await axios.post(`https://digitalcampus.nerdy-bear.com/api/auth/local/`, data)
    return answer.data
}