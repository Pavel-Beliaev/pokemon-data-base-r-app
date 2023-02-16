import React, {useEffect, useRef, useState} from 'react';
import cl from './content.module.css'
import LoaderDefault from "../Loaders/LoaderDefault/LoaderDefault";
import ElementsList from "./ElementsList/ElementsList";
import {useFetching} from "../hooks/useFetching";
import PokemonService from "../../API/PokemonService";
import PostFilter from "./PostFilter/PostFilter";
import {useFilter} from "../hooks/useFilter";
import {useSort} from "../hooks/useSort";
import {getPageCount} from "../../utils/pages";
import {useObserver} from "../hooks/useObserver";

const Content = () => {
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [pokemonsList, setPokemonsList] = useState([]);
    const [filter, setFilter] = useState({sortBy: '', desiredName: ''});
    const [fetchData, isLoading, errorData] = useFetching(async (limit, page) => {
        const pokemonsData = await PokemonService.getAll(limit, page);
        setPokemonsList([...pokemonsList, ...pokemonsData.results]);
        const totalCount = pokemonsData.count;
        setTotalPages(getPageCount(totalCount, limit));
    })
    const foundPokemons = useFilter(pokemonsList, filter.desiredName);
    const sortedList = useSort(foundPokemons, filter.sortBy);
    const lastElement = useRef()

    useObserver(lastElement, page < totalPages, isLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchData(limit, page);
    }, [page]);

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
                {sortedList && sortedList.map(n =>
                    <ElementsList
                        key={n.name}
                        name={n.name}
                        url={n.url}
                        isLoading={isLoading}
                    />
                )}
                <div ref={lastElement} className={cl.endless}/>
                {isLoading &&
                    <LoaderDefault/>
                }
            </div>

        </div>
    );
};

export default Content;
