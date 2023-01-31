import React from 'react';
import cl from './desktop.module.css'
import Header from "../../components/Header/Header";
import LeftSide from "../../components/SideBar/LeftSide/LeftSide";
import RightSide from "../../components/SideBar/RightSide/RightSide";
import Content from "../../components/Content/Content";

const Desktop = () => {
    return (
        <div className={cl.container}>
            <div className={cl.container_header}><Header/></div>
            <div className={cl.main}>
                <div className={cl.container_left_sidebar}><LeftSide/></div>
                <div className={cl.container_content}><Content/></div>
                <div className={cl.container_right_sidebar}><RightSide/></div>
            </div>
        </div>
    );
};

export default Desktop;