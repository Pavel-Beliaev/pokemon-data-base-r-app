import React from 'react';
import './elementsList.css'


const CardPokemon = ({pokemonInfo, pokemonsStats}) => {
    return (
        <div className={pokemonInfo ? 'list_block_content_open' : 'list_block_content'}>
            <div>
                <h4>PHOTO</h4>
                <div className='block_img'>
                    <img src={pokemonsStats.sprites.front_default} alt=""/>
                    <img src={pokemonsStats.sprites.back_default} alt=""/>
                    <img src={pokemonsStats.sprites.front_shiny} alt=""/>
                    <img src={pokemonsStats.sprites.back_shiny} alt=""/>
                </div>
            </div>
            <div className='block_content_elements'>
                <div>
                    <h4>HP</h4>
                    <p>{pokemonsStats.stats[0].base_stat}</p>
                </div>
                <div>
                    <h4>ATTACK</h4>
                    <p>{pokemonsStats.stats[1].base_stat}</p>
                </div>
                <div>
                    <h4>DEFENSE</h4>
                    <p>{pokemonsStats.stats[2].base_stat}</p>
                </div>
            </div>
            <div className='block_content_elements'>
                <div>
                    <h4>SPECIAL-ATTACK</h4>
                    <p>{pokemonsStats.stats[3].base_stat}</p>
                </div>
                <div>
                    <h4>SPECIAL-DEFENSE</h4>
                    <p>{pokemonsStats.stats[4].base_stat}</p>
                </div>
                <div>
                    <h4>SPEED</h4>
                    <p>{pokemonsStats.stats[5].base_stat}</p>
                </div>
            </div>
            <div className='block_content_elements'>
                <div>
                    <h4>WEIGHT</h4>
                    <p>{pokemonsStats.weight}</p>
                </div>
                <div>
                    <h4>HEIGHT</h4>
                    <p>{pokemonsStats.height}</p>
                </div>
            </div>
        </div>
    );
};

export default CardPokemon;