import React from "react";
import "../css/SidebarWhoFollow.css"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


export default function SidebarWhoFollow() {

    return (
        <>
            
            <div className="SidebarWhoFollow">
                <div className="SidebarWhoFollow__trend">
                    <span>Trending in Turkey</span>
                    <h3>#SQUID</h3>
                    <span>2,066 tweets</span>
                </div>
                <div className="SidebarWhoFollow__icons">
                    <MoreHorizOutlinedIcon fontSize="small" />
                </div>
            </div>
        </>
    );
}