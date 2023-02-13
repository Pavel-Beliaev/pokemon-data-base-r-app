import React, {useEffect, useState} from 'react';
import cl from './content.module.css'
import LoaderDefault from "../Loaders/LoaderDefault/LoaderDefault";
import ElementsList from "./ElementsList/ElementsList";
import {useFetching} from "../hooks/useFetching";
import PokemonService from "../../API/PokemonService";
import {usePosts} from "../hooks/usePost";
import PostFilter from "./PostFilter/PostFilter";

const Content = () => {
    const [pokemonName, setPokemonName] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearched = usePosts(pokemonName, filter.sort, filter.query);
    const [fetchData, isLoading, errorData] = useFetching(async () => {
        const pokemonData = await PokemonService.getAll();
        setPokemonName(pokemonData);
    })

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className={cl.content}>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <div className={cl.block_list}>
                {errorData &&
                    <h1>Error: ${errorData}</h1>
                }
                {isLoading
                    ? <LoaderDefault/>
                    : sortedAndSearched.map(n =>
                        <ElementsList
                            key={n.name}
                            name={n.name}
                            url={n.url}
                            isLoading={isLoading}
                        />
                    )}
            </div>
        </div>
    );
};

export default Content;
