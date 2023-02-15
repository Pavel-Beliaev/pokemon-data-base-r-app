import {useMemo, useState} from "react";
import {useDebounce} from "./useDebounce";

export const useSort = (pokemonsList, sortBy) => {
    const sortedList = useMemo(() => {
        if (sortBy === 'asc') {
            return [...pokemonsList].sort((a, b) =>
                a.name.localeCompare(b.name))
        } else if (sortBy === 'desc') {
            return [...pokemonsList].sort((a, b) =>
                b.name.localeCompare(a.name))
        }
        return pokemonsList;
    }, [sortBy, pokemonsList])

    return sortedList;
}
