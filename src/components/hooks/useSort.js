import {useMemo, useState} from "react";
import {useDebounce} from "./useDebounce";

export const useSort = (pokemonsList, sortBy) => {
    const [sortedList, setSortedList] = useState(pokemonsList);

    useMemo(() => {
        if (sortBy === 'asc') {
            setSortedList([...pokemonsList].sort((a, b) =>
                a.name.localeCompare(b.name)))
        } else if (sortBy === 'desc') {
            setSortedList([...pokemonsList].sort((a, b) =>
                b.name.localeCompare(a.name)))
        } else {
            setSortedList(pokemonsList)
        }
    }, [sortBy, pokemonsList])

    return [sortedList, setSortedList];
}
