import axios from "axios";

export default class PokemonService {
    static async getAll(limit, page) {
        const offset = (page - 1) * 10;
        const response = await axios
            .get("https://pokeapi.co/api/v2/pokemon?", {
                params:{
                    limit: limit,
                    offset: offset,
                }
            })
        return response.data
    }

    static async getParams(url) {
        const response = await axios
            .get(`${url}`)
        return response.data
    }
}