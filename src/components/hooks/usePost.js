import {useMemo} from "react";

export const useSortedPosts = (pokemonName, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort === 'asc') {
            return [...pokemonName].sort((a, b) =>
                a.name.localeCompare(b.name))
        }else if (sort === 'desc') {
            return [...pokemonName].sort((a, b) =>
                b.name.localeCompare(a.name))
        }
        return pokemonName;
    }, [sort, pokemonName])

    return sortedPosts;
}

export const usePosts = (pokemonName, sort, query) => {
    const sortedPosts = useSortedPosts(pokemonName, sort);

    const sortedAndSearched = useMemo(() => {
        return sortedPosts
            .filter(post => post.name
                .toLowerCase()
                .includes(query))
    }, [query, sortedPosts])

    return sortedAndSearched;
}