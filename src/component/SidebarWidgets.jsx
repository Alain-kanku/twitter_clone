import React from "react";
import "../css/SidebarWidgets.css"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


export default function SidebarWidgets() {

    return (
        <>
            
            <div className="SidebarWidgets">
                <div className="SidebarWidgets__trend">
                    <span>Trending in Turkey</span>
                    <h3>#SQUID</h3>
                    <span>2,066 tweets</span>
                </div>
                <div className="SidebarWidgets__icons">
                    <MoreHorizOutlinedIcon fontSize="small" />
                </div>
            </div>
        </>
    );
}