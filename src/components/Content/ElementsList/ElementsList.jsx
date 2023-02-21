import React, {useEffect, useState} from 'react';
import './elementsList.css'
import {ReactComponent as BurgerIcon} from "../../../public/svg/burger.svg";
import Tags from "../../Tags/Tags";
import {TagsParams} from "../../../mock/static";
import CardPokemon from "./CardPokemon";
import {useFetching} from "../../hooks/useFetching";
import PokemonService from "../../../API/PokemonService";
import SkeletonCard from "../../Loaders/SkeletonCards/SkeletonCard";

const ElementsList = ({
                          url,
                          name,
                          sortHandler,
                          currentDragCard,
                          setCurrentDragCard,
                          isDragAble,
                          setIsDragAble,
                      }) => {
    const card = {name, url}
    const [pokemonInfo, setPokemonInfo] = useState(false);
    const [pokemonsStats, setPokemonsStats] = useState(null);


    const [fetchData, isLoading, errorData] = useFetching(async () => {
        const pokemons = await PokemonService.getParams(url);
        if (pokemonInfo) {
            setPokemonsStats(pokemons);
        }
    });

    useEffect(() => {
        if (pokemonInfo) {
            fetchData();
        } else {
            setPokemonsStats(null);
        }
    }, [pokemonInfo])

    function dragStartHandler(e, card) {
        if (isDragAble) {
            setCurrentDragCard(card);
        }
    }

    function dragOverHandler(e) {
        if (isDragAble) {
            e.preventDefault();
        }
    }

    function dropHandler(e, card) {
        if (isDragAble) {
            e.preventDefault();
            sortHandler(currentDragCard, card);
            setIsDragAble(false);
        }
    }

    const DragAble = () => {
        setIsDragAble(true)
    }

    const DragEnable = () => {
        setIsDragAble(false)

    }

    return (
        <div
            onDragStart={(e) => dragStartHandler(e, card)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, card)}
            className={pokemonInfo ? 'list_element_open' : 'list_element_close'}
            draggable={isDragAble}
        >
            <div className='list_block_main'>
                <div
                    className='list_block_main_svg'
                    onMouseDown={DragAble}
                    onMouseUp={DragEnable}
                >
                    <BurgerIcon/>
                </div>
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