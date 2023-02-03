import React from 'react';
import './elementsList.css'
import 'react-loading-skeleton/dist/skeleton.css';
import SkeletonCard from "../../../Loaders/SkeletonCards/SkeletonCard";

const CardPokemon = ({
                         pokemonInfo,
                         hp,
                         atk,
                         def,
                         spec_atk,
                         spec_def,
                         speed,
                         weight,
                         height,
                         img_front_default,
                         img_back_default,
                         img_front_shiny,
                         img_back_shiny,
                         isLoading
                     }) => {
    return (
        <div className={pokemonInfo ? 'list_block_content_open' : 'list_block_content'}>
            <div>
                <h4>PHOTO</h4>
                <div className='block_img'>
                    <img src={img_front_default} alt="img"/>
                    <img src={img_back_default} alt="img"/>
                    <img src={img_front_shiny} alt="img"/>
                    <img src={img_back_shiny} alt="img"/>
                </div>
            </div>
            <div className='block_content_elements'>
                <div>
                    <h4>HP</h4>
                    <p>{hp}</p>
                </div>
                <div>
                    <h4>ATTACK</h4>
                    <p>{atk}</p>
                </div>
                <div>
                    <h4>DEFENSE</h4>
                    <p>{def}</p>
                </div>
            </div>
            <div className='block_content_elements'>
                <div>
                    <h4>SPECIAL-ATTACK</h4>
                    <p>{spec_atk}</p>
                </div>
                <div>
                    <h4>SPECIAL-DEFENSE</h4>
                    <p>{spec_def}</p>
                </div>
                <div>
                    <h4>SPEED</h4>
                    <p>{speed}</p>
                </div>
            </div>
            <div className='block_content_elements'>
                <div>
                    <h4>WEIGHT</h4>
                    <p>{weight}</p>
                </div>
                <div>
                    <h4>HEIGHT</h4>
                    <p>{height}</p>
                </div>
            </div>
        </div>
    );
};

export default CardPokemon;