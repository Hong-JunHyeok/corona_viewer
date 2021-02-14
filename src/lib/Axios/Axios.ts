import axios, { AxiosResponse } from "axios"
import { BASE_SERVER, SECRET_KEY } from "config/config.json"

interface paramsType {
    url: string
    secret_key?: string
}

export const getRequest = async ({ url, secret_key }: paramsType) => {
    const response: AxiosResponse = await axios.get(`${url}?serviceKey=${secret_key}`)
    return response.data
}
