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
import Pagination from "../UI/Pagination/Pagination";

const Content = () => {
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [pokemonsList, setPokemonsList] = useState([]);
    const [filter, setFilter] = useState({sortBy: '', desiredName: ''});
    const [currentDragCard, setCurrentDragCard]= useState({});
    const [isDragAble, setIsDragAble] = useState(false);
    const [isPaginationAble, setIsPaginationAble] = useState(false)

    const [fetchData, isLoading, errorData] = useFetching(async (limit, page) => {
        const pokemonsData = await PokemonService.getAll(limit, page);
        if (!isPaginationAble) {
            setPokemonsList(pokemonsData.results)
        }else setPokemonsList([...pokemonsList, ...pokemonsData.results]);
        const totalCount = pokemonsData.count;
        setTotalPages(getPageCount(totalCount, limit));
    })
    const foundPokemons = useFilter(pokemonsList, filter.desiredName);
    const [sortedList, setSortedList] = useSort(foundPokemons, filter.sortBy);
    const lastElement = useRef()

    useObserver(lastElement, page < totalPages, isLoading, () => {
        setPage(page + 1);
    }, !isPaginationAble);

    useEffect(() => {
        fetchData(limit, page);
    }, [page]);

    const sortHandler = (currentCard, card) => {
        setSortedList(sortedList.map(c => {
                if (c.name === card.name) {
                    return currentCard
                }
                if (c.name === currentCard.name) {
                    return card
                }
                return c
            }))
    }

    const onPageChange = (page) => {
        setPage(page)
    }

    return (
        <div className={cl.content}>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
                setIsPaginationAble={setIsPaginationAble}
                isPaginationAble={isPaginationAble}
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
                        sortHandler={sortHandler}
                        currentDragCard={currentDragCard}
                        setCurrentDragCard={setCurrentDragCard}
                        isDragAble={isDragAble}
                        setIsDragAble={setIsDragAble}
                    />
                )}
                <div ref={lastElement} className={cl.endless}/>
                {isLoading &&
                    <LoaderDefault/>
                }
            </div>
            {!isPaginationAble &&
                <Pagination
                totalPages={totalPages}
                page={page}
                onPageChange={onPageChange}
                className={cl.pagination_bar}
                />
            }

        </div>
    );
};

export default Content;
