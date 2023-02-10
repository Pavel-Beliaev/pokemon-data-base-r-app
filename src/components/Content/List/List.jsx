import React, {useEffect, useState} from 'react';
import cl from './list.module.css'
import ElementsList from "./ElementsList/ElementsList";
import PokemonService from "../../../API/PokemonService";
import LoaderDefault from "../../Loaders/LoaderDefault/LoaderDefault";
import {useFetching} from "../../hooks/useFetching";

const List = () => {
    const [pokemonName, setPokemonName] = useState([]);
    const [fetchData, isLoading, errorData] = useFetching(async () => {
        const pokemonData = await PokemonService.getAll();
        setPokemonName(pokemonData);
    })

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className={cl.block_list}>
            {errorData &&
            <h1>Error: ${errorData}</h1>
            }
            {isLoading
                ? <LoaderDefault/>
                : pokemonName.map(n =>
                    <ElementsList
                        key={n.name}
                        name={n.name}
                        url={n.url}
                        isLoading={isLoading}
                    />
                )}
        </div>
    );
};

export default List;