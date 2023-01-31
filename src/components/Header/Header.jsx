import React from 'react';
import cl from './header.module.css'
import {ReactComponent as CloudIcon} from "../../public/svg/cloud.svg";
import {ReactComponent as SettingsIcon} from "../../public/svg/settings.svg";

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header_content}>
                <div className={cl.content_status}>
                    <CloudIcon/>
                    <p>Extension state: <span>Active</span></p>
                </div>
                <div className={cl.content_settings}>
                    <SettingsIcon/>
                    <p>Settings</p>
                </div>
            </div>
        </header>
    );
};

export default Header;