import {ReactComponent as SandboxIcon} from "../public/svg/sandbox.svg";
import {ReactComponent as HeartIcon} from "../public/svg/heart.svg";
import {ReactComponent as GridIcon} from "../public/svg/grid.svg";
import {ReactComponent as UsersIcon} from "../public/svg/users.svg";
import {ReactComponent as TrendIcon} from "../public/svg/trending.svg";

export const SideBarMenuParams = [
    {image: <SandboxIcon/>, name: 'All Dapplets',  id: 1},
    {image: <HeartIcon/>, name: 'Editor’s Choice',  id: 2},
    {image: <GridIcon/>, name: 'Essential Dapplets',  id: 3},
    {image: <UsersIcon/>, name: 'Social Networks',  id: 4},
    {image: <TrendIcon/>, name: 'Financial Dapplets',  id: 5},
]
export const TagsParams = {
    MyTagsParams: [
        {id: 1, text: 'Twitter'},
        {id: 2, text: 'Social Media'},
        {id: 3, text: 'Top 10'},
        {id: 4, text: 'Finances'},
    ],
    MyAllTagsParamsII: [
        {id: 1, text: 'Media'},
        {id: 2, text: 'Test'},
        {id: 3, text: 'ToDo'},
    ],
    CommunityTagsParams: [
        {id: 1, text: 'Social'},
        {id: 2, text: 'Top 100'},
        {id: 3, text: 'Testing'},
        {id: 4, text: 'Favourites'},
    ],
}
