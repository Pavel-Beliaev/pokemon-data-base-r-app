import React from 'react';
import './sidebar.css'
import ElementsSideBar from "./ElementsSideBar";

const SideBar = ({params, setSideBar, isSideBar} ) => {

    const sideBarFat = () => {
        setSideBar(false);
    }

    return (
        <div
            className='block_sidebar'
            onClick={sideBarFat}>
            {params.map(el => <ElementsSideBar
                key={el.id}
                id={el.id}
                name={el.name}
                image={el.image}
                isSideBar={isSideBar}
                />
            )}
        </div>
    );
};

export default SideBar;