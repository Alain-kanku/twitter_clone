import React from "react";
import "../css/SideBarWhoFollow.css"
import { Avatar, Button } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';



export default function SidebarWhoFollow() {

    return (
        <>

            <div className="SidebarWhoFollow">

                <div className="SidebarWhoFollow__avatar">
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                </div>
                <div className="SidebarWhoFollow__info">
                    <div className="SidebarWhoFollow__nameBadge">
                        <h3>The new york time </h3>
                        <span><VerifiedIcon className='post__badge' /></span>
                    </div>
                    <h6>@TRUMP</h6>
                </div>
                
                <Button className='tweetBox__tweetButton'>follow</Button>
            </div>
        </>
    );
}