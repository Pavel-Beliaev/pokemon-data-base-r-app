import React from 'react';
import cl from './postfilter.module.css'
import InputCustom from "../../UI/InputCustom/InputCustom";
import SelectCuston from "../../UI/SelectCustom/SelectCuston";

const PostFilter = ({filter, setFilter}) => {


    return (
        <div className={cl.filter}>
            <InputCustom
                type='text'
                placeholder='Search'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <SelectCuston
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Sort by'
                options={[
                    {value: 'asc', name: 'Ascending'},
                    {value: 'desc', name: 'Descending'},
                ]}
            />
        </div>
    );
};

export default PostFilter;