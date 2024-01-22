import React from "react";
import "../css/Sidebar.css"
import SidebarOption from './SidebarOption'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Button } from '@mui/material';
import "../css/SideBarWhoFollow.css"
import HttpsIcon from '@mui/icons-material/HttpsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';




export default function Sidebar() {

    return (
        <div className="Sidebar">
            {/* component logo*/}
            <TwitterIcon className="Sidebar_TwitterIcon" />
            {/* component SidebarOption*/}
            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={TagIcon} text="Explore" />
            <SidebarOption Icon={NotificationsIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PersonAddAltIcon} text="Profil" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Tweet
            </Button>
            <div className="profil__settings">
                <div className="SidebarWhoFollow">

                    <div className="SidebarWhoFollow__avatar">
                        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                    </div>
                    <div className="SidebarWhoFollow__info">
                        <div className="SidebarWhoFollow__nameBadge">
                            <h3>Donald Trump </h3>
                            <span><HttpsIcon className='post__badge' /></span>
                        </div>
                        <h6>@TRUMP</h6>
                    </div>

                    <MoreHorizOutlinedIcon fontSize="large" />
                </div>
            </div>

        </div>
    )
}