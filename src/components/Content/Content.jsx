import React from 'react';
import cl from './content.module.css'
import List from "./List/List";

const Content = () => {
    return (
        <div className={cl.content}>
            <div className={cl.content_form}>
                <input type="text" placeholder='Search'/>
                <select name="Name" id="">
                    <option disabled>Sort by</option>
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>
                <select name="Stats" id="">
                    <option>Descending</option>
                    <option>Release Date</option>
                </select>
            </div>
            <List/>
        </div>
    );
};

export default Content;