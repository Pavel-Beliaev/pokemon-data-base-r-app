import React, {useEffect, useState} from 'react';
import './elementsList.css'
import {ReactComponent as BurgerIcon} from "../../../../public/svg/burger.svg";
import Tags from "../../../Tags/Tags";
import {TagsParams} from "../../../../mock/static";
import CardPokemon from "./CardPokemon";
import axios from "axios";

const ElementsList = ({name, url}) => {
    const [pokemonInfo, setPokemonInfo] = useState(false)
    const [pokemons, setPokemons] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(`${url}`);
            setPokemons({
                hp: response.data.stats[0].base_stat,
                atk: response.data.stats[1].base_stat,
                def: response.data.stats[2].base_stat,
                spec_atk: response.data.stats[3].base_stat,
                spec_def: response.data.stats[4].base_stat,
                speed: response.data.stats[5].base_stat,
                weight: response.data.weight,
                height: response.data.height,
                img_front_default: response.data.sprites.front_default,
                img_back_default: response.data.sprites.back_default,
                img_front_shiny: response.data.sprites.front_shiny,
                img_back_shiny: response.data.sprites.back_shiny,
            });
        };
        fetchData();
    }, []);

    return (
        <div className={pokemonInfo ? 'list_element_open' : 'list_element_close'}>
            <div className='list_block_main'>
                <BurgerIcon
                    onClick={() => setPokemonInfo((pokemonInfo) => !pokemonInfo)}/>
                <img src={pokemonInfo? 'https://img.icons8.com/color/256/open-pokeball--v2.png' :'https://img.icons8.com/color/256/pokeball.png'} alt="img"/>
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
            />
        </div>
    );
};

export default ElementsList;