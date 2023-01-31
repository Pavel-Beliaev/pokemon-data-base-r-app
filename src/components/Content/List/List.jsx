import React, {useEffect, useState} from 'react';
import cl from './list.module.css'
import ElementsList from "./ElementsList/ElementsList";
import axios from "axios";

const List = () => {
    const [pokemonName, setPokemonName] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios("https://pokeapi.co/api/v2/pokemon");
            setPokemonName(response.data.results);
        };
        fetchData();
    }, []);


    return (
        <div className={cl.block_list}>
            {pokemonName.map(n =>
                <ElementsList
                    key={n.name}
                    name={n.name}
                    url={n.url}
                />
            )}
        </div>
    );
};

export default List;