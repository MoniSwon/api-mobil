import axios from 'axios'

export async function createUser(data) {
    const answer = await axios.post(`https://digitalcampus.nerdy-bear.com/api/auth/local/register`, data)
    return answer.data
}

export async function getUser(data) {
    const answer = await axios.post(`https://digitalcampus.nerdy-bear.com/api/auth/local/`, data)
    return answer.data
}

export async function getPlaces(token) {
    const answer = await axios.get(`https://digitalcampus.nerdy-bear.com/api/places`, { headers: {"Authorization" : `Bearer ${token}`} })
    return answer.data
}

export async function postPlaces(token, data) {
    const answer = await axios.post(`https://digitalcampus.nerdy-bear.com/api/places`, data, { headers: {"Authorization" : `Bearer ${token}`} })
    return answer.data
}

export async function putPlaces(token, data, id) {
    const answer = await axios.put("https://digitalcampus.nerdy-bear.com/api/places/" + id, data, { headers: {"Authorization" : `Bearer ${token}`} })
    return answer.data
}

export async function deletePlace(token, id) {
    const answer = await axios.delete("https://digitalcampus.nerdy-bear.com/api/places/" + id, { headers: {"Authorization" : `Bearer ${token}`} })
    return answer.data
}

export async function getTypes(token) {
    const answer = await axios.get("https://digitalcampus.nerdy-bear.com/api/types/", { headers: {"Authorization" : `Bearer ${token}`} })
    return answer.data
}