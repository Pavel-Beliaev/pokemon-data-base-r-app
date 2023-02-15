import React from 'react';
import cl from './tags.module.css'
import {ReactComponent as CrossIcon} from "../../public/svg/cross.svg";

const Tag = ({text, tagType}) => {

    return (
        <div className={
            tagType === "blue"
                ? [cl.my_tag]
                : tagType === 'light-green'
                    ? [cl.community_tag]
                    : [cl.my_tag]}>
            <p>{text}</p>
            <CrossIcon/>
        </div>
    );
};

export default Tag;