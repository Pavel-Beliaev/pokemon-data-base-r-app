import React from 'react';
import cl from './welcome.module.css'
import {ReactComponent as DappletsText} from "../../public/svg/dapplets..svg";

const Welcome = () => {
    return (
        <div className={cl.background}>
            <div className={cl.block_welcome}>
                <div className={cl.content}>
                    <div className={cl.dapplets}><DappletsText/></div>
                    <h1>Добро пожаловать</h1>
                    <p className={cl.p_1}>в тестовое задание на должность Frontend Developer</p>
                    <p>Мы строим платформу Аугментированного веба, состоящую из браузерного плагина и
                        децентрализованных
                        приложений (дапплетов), основанных на крипто-технологиях.</p>
                    <p>Наша платформа создается по принципу open-source и доступна для разработчиков со всего
                        мира.</p>
                    <div className={cl.content_btns}>
                        <button className={cl.btn_1}>Desktop</button>
                        <button className={cl.btn_2}>Mobile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;