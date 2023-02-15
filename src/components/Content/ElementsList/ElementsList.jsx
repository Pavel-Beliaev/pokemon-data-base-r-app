import React, {useEffect, useState} from 'react';
import './elementsList.css'
import {ReactComponent as BurgerIcon} from "../../../public/svg/burger.svg";
import Tags from "../../Tags/Tags";
import {TagsParams} from "../../../mock/static";
import CardPokemon from "./CardPokemon";
import {useFetching} from "../../hooks/useFetching";
import PokemonService from "../../../API/PokemonService";
import SkeletonCard from "../../Loaders/SkeletonCards/SkeletonCard";
import {getIdUrl} from "../../../utils/parsing";

const ElementsList = ({name, url}) => {
    const [pokemonInfo, setPokemonInfo] = useState(false);
    const [pokemonsStats, setPokemonsStats] = useState(null);
    // const [id, setId] = useState(null)
    const [fetchData, isLoading, errorData] = useFetching(async () => {
        const pokemons = await PokemonService.getParams(url);
        if (pokemonInfo) {
            setPokemonsStats(pokemons);
        }
    });

    useEffect(() => {
        if (pokemonInfo) {
            fetchData();
            // setId(getIdUrl(url));
        }else {
            setPokemonsStats(null);
            // setId(null);
        }
    }, [pokemonInfo])


    return (
        <div className={pokemonInfo ? 'list_element_open' : 'list_element_close'}>
            <div className='list_block_main'>
                <BurgerIcon/>
                <img
                    src={pokemonInfo ? 'https://img.icons8.com/color/256/open-pokeball--v2.png' : 'https://img.icons8.com/color/256/pokeball.png'}
                    alt="img"
                    onClick={() => setPokemonInfo(!pokemonInfo)
                    }/>
                <div className='block_name'>
                    <h3>{name}</h3>
                </div>
                <p className='p_description'>Pokemon info</p>
                <p className='p_author'>Professor Oak</p>
                <div className='list_block_tags'>
                    <Tags
                        tags={TagsParams.CommunityTagsParams}
                        tagType={"light-green"}/>
                </div>
                <button>INSTAL</button>
            </div>
            {errorData &&
                <h1>Error: ${errorData}</h1>
            }
            {isLoading
                ?
                pokemonInfo &&
                <SkeletonCard/>
                :
                pokemonsStats &&
                <CardPokemon
                    pokemonInfo={pokemonInfo}
                    pokemonsStats={pokemonsStats}
                />
            }
        </div>
    );
};

export default ElementsList;