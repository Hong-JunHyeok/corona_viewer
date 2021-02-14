import { selector } from "recoil"
import { getRequest } from "lib/Axios/Axios"
import { BASE_SERVER, SECRET_KEY } from "config/config.json"

export const allCoronaData = selector({
    key: "corona/allCoronaData",
    get: async () => {
        const data = await getRequest({ url: BASE_SERVER, secret_key: SECRET_KEY })
        return data
    },
})
