import React from 'react';
import './elementsList.css'

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
                         img_f_d,
                         img_b_d,
                         img_f_s,
                         img_b_s,
                     }) => {
    return (
        <div className={pokemonInfo ? 'list_block_content_open' : 'list_block_content'}>
            <div>
                <h4>PHOTO</h4>
                <div className='block_img'>
                    <img src={img_f_d} alt="img"/>
                    <img src={img_b_d} alt="img"/>
                    <img src={img_f_s} alt="img"/>
                    <img src={img_b_s} alt="img"/>
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