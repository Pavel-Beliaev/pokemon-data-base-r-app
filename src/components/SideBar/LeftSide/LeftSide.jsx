import React, {useState} from 'react';
import './leftside.css'
import {ReactComponent as ArrowIcon} from "../../../public/svg/arrowRight.svg";
import {ReactComponent as LogoIcon} from "../../../public/svg/logo.svg";
import SideBar from "./SideBarMenu/SideBar";
import {TagsParams, SideBarMenuParams} from "../../../mock/static";
import Tags from "../../Tags/Tags";
import {Link} from "react-router-dom";
import {Transition} from "@headlessui/react";
import logoText from '../../../public/png/textlogo.png'


const LeftSide = () => {
    const [isSideBar, setSideBar] = useState(false);

    return (
        <div className={isSideBar ? 'sideSlim' : 'side'}>
            <ArrowIcon
                className={isSideBar ? 'arrow_slim' : 'arrow'}
                onClick={() => setSideBar((isSideBar) => !isSideBar)}/>
            <div className='block'>
                <div className='block_logo'>
                    <LogoIcon/>
                    <Transition
                        show={!isSideBar}
                        enter='enter'
                        enterFrom='enterFrom'
                        enterTo='enterTo'
                        leave='leave'
                        leaveFrom='leaveFrom'
                        leaveTo='leaveTo'
                    >
                        <img src={logoText} alt="logoText" className='logo_p'/>
                    </Transition>
                </div>
                <SideBar params={SideBarMenuParams} isSideBar={isSideBar} setSideBar={setSideBar}/>
                <Transition
                    show={!isSideBar}
                    enter='enter'
                    enterFrom='enterFrom'
                    enterTo='enterTo'
                    leave='leave'
                    leaveFrom='leaveFrom'
                    leaveTo='leaveTo'
                >
                    <div className='block_lists'>
                        <h3>My lists</h3>
                        <p>TOP-10 Twitter Dapplets (<Link to='#'>Me</Link>)</p>
                        <p>Best Financial dapplets by Jack (<Link to='#'>Jack</Link>)</p>
                        <p>TOP-10 Twitter Dapplets (<Link to='#'>Me</Link>)</p>
                        <div className='block_tags'>
                            <h3>My tags</h3>
                            <Tags tags={TagsParams.MyTagsParams} tagType={"blue"}/>
                            <Tags tags={TagsParams.MyAllTagsParamsII} tagType={"blue"}/>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )
        ;
};

export default LeftSide;