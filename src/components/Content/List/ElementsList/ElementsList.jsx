import React, {useEffect, useState} from 'react';
import './elementsList.css'
import {ReactComponent as BurgerIcon} from "../../../../public/svg/burger.svg";
import Tags from "../../../Tags/Tags";
import {TagsParams} from "../../../../mock/static";
import CardPokemon from "./CardPokemon";
import PokemonService from "../../../../API/PokemonService";

const ElementsList = ({name, url}) => {
    const [pokemonInfo, setPokemonInfo] = useState(false);
    const [pokemons, setPokemons] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setTimeout(async () => {
                const pokemonStats = await PokemonService.getParams(url);
                setPokemons({
                    hp: pokemonStats.stats[0].base_stat,
                    atk: pokemonStats.stats[1].base_stat,
                    def: pokemonStats.stats[2].base_stat,
                    spec_atk: pokemonStats.stats[3].base_stat,
                    spec_def: pokemonStats.stats[4].base_stat,
                    speed: pokemonStats.stats[5].base_stat,
                    weight: pokemonStats.weight,
                    height: pokemonStats.height,
                    img_front_default: pokemonStats.sprites.front_default,
                    img_back_default: pokemonStats.sprites.back_default,
                    img_front_shiny: pokemonStats.sprites.front_shiny,
                    img_back_shiny: pokemonStats.sprites.back_shiny,
                });
                setIsLoading(false);
            },5000)
        };
        fetchData();
    }, []);

    return (
        <div className={pokemonInfo ? 'list_element_open' : 'list_element_close'}>
            <div className='list_block_main'>
                <BurgerIcon/>
                <img
                    src={pokemonInfo ? 'https://img.icons8.com/color/256/open-pokeball--v2.png' : 'https://img.icons8.com/color/256/pokeball.png'}
                    alt="img"
                    onClick={() => setPokemonInfo((pokemonInfo) => !pokemonInfo)}/>
                <div className='block_name'>
                    <h3>{name}</h3>
                    <p>id</p>
                </div>
                <p className='p_description'>Pokemon info</p>
                <p className='p_author'>Professor Oak</p>
                <div className='list_block_tags'>
                    <Tags tags={TagsParams.CommunityTagsParams} tagType={"light-green"}/>
                </div>
                <button>INSTAL</button>
            </div>
            <CardPokemon
                pokemonInfo={pokemonInfo}
                hp={pokemons.hp}
                atk={pokemons.atk}
                def={pokemons.def}
                spec_atk={pokemons.spec_atk}
                spec_def={pokemons.spec_def}
                speed={pokemons.speed}
                weight={pokemons.weight}
                height={pokemons.height}
                img_front_default={pokemons.img_front_default}
                img_back_default={pokemons.img_back_default}
                img_front_shiny={pokemons.img_front_shiny}
                img_back_shiny={pokemons.img_back_shiny}
                isLoading={isLoading}
            />
        </div>
    );
};

export default ElementsList;