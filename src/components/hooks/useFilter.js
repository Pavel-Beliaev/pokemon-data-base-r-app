import {useMemo, useState} from "react";
import {useDebounce} from "./useDebounce";

export const useFilter = (pokemonsList, desiredName) => {
    const [filtedList, setFiltedList] = useState(pokemonsList);
    const debouncedSearch = useDebounce((values, desiredValue) => {
        setFiltedList(desiredValue ? values
            .filter(list => list.name
                .toLowerCase()
                .includes(desiredValue.toLowerCase())) : values)
    }, 300)

    useMemo(() => {
        if (desiredName) {
            debouncedSearch(pokemonsList, desiredName)
        } else {
            setFiltedList(pokemonsList)
        }
    }, [desiredName, pokemonsList])

    return filtedList;
}