import React from 'react';
import cl from './tags.module.css'
import Tag from "./Tag";


const Tags = ({tags, tagType}) => {
    return (
        <div className={cl.block_tags}>
            {tags.map(tg => <Tag
                key={tg.id}
                id={tg.id}
                text={tg.text}
                tagType={tagType}
            />)}
        </div>
    );
};

export default Tags;