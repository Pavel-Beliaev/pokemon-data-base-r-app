import React, {useState} from 'react';
import './sidebar.css'
import {ReactComponent as SquadBG} from "../../../../public/svg/squad.svg";
import {Transition} from "@headlessui/react";

const ElementsSideBar = ({image, name, isSideBar}) => {
    const [isBackground, setBackground] = useState(false);
    const style = {
        position: 'absolute',
        filter: 'blur(0.625rem)',
        fill: isBackground
            ? '#0085FF'
            : 'none'
    }

    const trigger = () => {
        setBackground(true);
    };
    const notTrigger = () => {
        setBackground(false);
    };
    return (
        <div
            onMouseEnter={trigger}
            onMouseLeave={notTrigger}
            className='sidebar_elements'>
            <div
                className='element'>
                <SquadBG style={style}/>
                <span className='image'>
                            {image}
                        </span>
                <Transition
                    show={!isSideBar}
                    enter='enter_sb'
                    enterFrom='enterFrom_sb'
                    enterTo='enterTo_sb'
                    leave='leave_sb'
                    leaveFrom='leaveFrom_sb'
                    leaveTo='leaveTo_sb'
                >
                    <span className='text'>
                            {name}
                        </span>
                </Transition>
            </div>
        </div>
    );
};

export default ElementsSideBar;