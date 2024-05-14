import axios from "axios"

export const getPlayers = () => {
    return axios({
        method: "GET",
        url: "http://localhost:3331/players"
    })
}