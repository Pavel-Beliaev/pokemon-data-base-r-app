import React, {useState} from 'react';
import cl from './rightside.module.css'
import Tags from "../../Tags/Tags";
import {TagsParams} from "../../../mock/static";
import {ReactComponent as ArrowIcon} from "../../../public/svg/arrowRight.svg";
import {Link} from "react-router-dom";

const RightSide = () => {
    const [isSideBar, setSideBar] = useState(false);

    const openSidebar = () => {
        setSideBar(false)
    }
    const closeSidebar = () => {
        setSideBar(true)
    }

    return (
        <div
            onMouseEnter={openSidebar}
            className={isSideBar ? [cl.side_slim] : [cl.side]}>
            <ArrowIcon
                onClick={closeSidebar}
                className={cl.arrow}/>
            <div className={cl.side_block}>
                <h2>Dapplet Settings</h2>
                <div className={cl.block_create}>
                    <div className={cl.list_input}>
                        <p>Create new list</p>
                        <div className={cl.form}>
                            <input type="text" placeholder='List Name'/>
                            <button>Create</button>
                        </div>
                    </div>
                    <div className={cl.list_input}>
                        <p>New tag</p>
                        <div className={cl.form}>
                            <input type="text" placeholder='Tag name'/>
                            <button>Create</button>
                        </div>
                    </div>
                    <div className={cl.list_tags}>
                        <h2>My tags</h2>
                        <Tags  tags={TagsParams.MyTagsParams} tagType={"blue"}/>
                    </div>
                    <div className={cl.list_tags}>
                        <h2>Community tags</h2>
                        <Tags  tags={TagsParams.CommunityTagsParams} tagType={"light-green"}/>
                    </div>
                </div>
                <div className={cl.block_links}>
                    <h2>Working on</h2>
                    <ul>
                        <li><Link to='#'>twitter.com</Link></li>
                        <li><Link to='#'>twitter.com/randomusername</Link></li>
                        <li><Link to='#'>facebook.com</Link></li>
                        <li><Link to='#'>facebook.com/randomusername</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RightSide;