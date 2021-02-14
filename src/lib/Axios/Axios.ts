import axios from "axios"
import { BASE_SERVER, SECRET_KEY } from "config/config.json"

interface paramsType {
    url: string
    secret_key?: string
}

export const getRequest = ({ url, secret_key }: paramsType) => {
    const response = axios.get(`${url}/?serviceKey=${secret_key}`)
    return response
}
