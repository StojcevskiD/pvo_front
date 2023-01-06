import axios from "./custom-axios/axios";

export const Repository = {
    calculate: (file: any) => {
        return axios.post(`/calculate`, file)
    }
}