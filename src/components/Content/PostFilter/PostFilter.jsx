import React from 'react';
import cl from './postfilter.module.css'
import InputCustom from "../../UI/InputCustom/InputCustom";
import SelectCuston from "../../UI/SelectCustom/SelectCuston";

const PostFilter = ({filter, setFilter, setIsPaginationAble, isPaginationAble}) => {

    return (
        <div className={cl.filter}>
            <InputCustom
                type='text'
                placeholder='Search'
                value={filter.desiredName}
                onChange={e => setFilter({...filter, desiredName: e.target.value})}
            />
            <SelectCuston
                value={filter.sortBy}
                onChange={selectedSort => setFilter({...filter, sortBy: selectedSort})}
                defaultValue='Sort by'
                options={[
                    {value: 'asc', name: 'Ascending'},
                    {value: 'desc', name: 'Descending'},
                ]}
            />
            <div className={cl.filter_checkbox}>
                <InputCustom
                    type='checkbox'
                    onChange={() => setIsPaginationAble((isPaginationAble) => !isPaginationAble)}
                />
                <p>Infinity scroll</p>
            </div>
        </div>
    );
};

export default PostFilter;