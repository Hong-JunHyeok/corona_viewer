import { selector } from "recoil"
import { getRequest } from "lib/Axios/Axios"
import { BASE_SERVER, SECRET_KEY } from "config/config.json"

export const eachRegionCoronaData = selector({
    key: "corona/eachRegionCoronaData",
    get: async () => {
        const data = await getRequest({
            url: BASE_SERVER + "/country/new/",
            secret_key: SECRET_KEY,
        })
        return data
    },
})
