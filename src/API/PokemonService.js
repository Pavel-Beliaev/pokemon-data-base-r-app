import axios from "axios";

export default class PokemonService {
    static async getAll(limit = 9, page = 1) {
        const response = await axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=9", {
                params:{
                    _limit: limit,
                    _page:  page
                }
            })
        return response.data.results
    }

    static async getParams(url) {
        const response = await axios
            .get(`${url}`)
        return response.data
    }
}