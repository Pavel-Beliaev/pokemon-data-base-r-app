import React, {useEffect, useState} from 'react';
import cl from './list.module.css'
import ElementsList from "./ElementsList/ElementsList";
import PokemonService from "../../../API/PokemonService";
import LoaderDefault from "../../Loaders/LoaderDefault/LoaderDefault";

const List = () => {
    const [pokemonName, setPokemonName] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setTimeout(async () => {
                const pokemonData = await PokemonService.getAll();
                setPokemonName(pokemonData);
                setIsLoading(false);
            }, 5000);
        };
        fetchData();
    }, []);

    return (
        <div className={cl.block_list}>
            {isLoading
                ? <LoaderDefault/>
                : pokemonName.map(n =>
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