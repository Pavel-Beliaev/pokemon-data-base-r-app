import axios from "axios";

export default class PokemonService {
    static async getAll() {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=3")
        console.log(response)
        return response.data.results
    }

    static async getParams(url) {
        const response = await axios.get(`${url}`)
        return response.data
    }
}