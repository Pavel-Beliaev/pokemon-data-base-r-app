import axios from "axios";

export default class PokemonService {
    static async getAll() {
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
            return response.data.results
        } catch (e) {
            console.log(e);
        }
    }
    static async getParams(url) {
        try{
            const response = await axios.get(`${url}`)
            return response.data
        } catch (e) {
            console.log(e);
        }
    }
}