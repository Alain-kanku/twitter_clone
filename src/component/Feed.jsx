import React from "react";
import "../css/Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';


export default function Feed() {

    return (
        <>
            <div className="feed">
                {/*Header*/}
                <div className="feed__header">
                <h2>Home</h2>
                <AutoAwesomeOutlinedIcon fontSize="large" />
                </div>
                

                {/*TweetBox*/}
                <TweetBox/>

                {/*Post*/}
                <Post/>
                <Post/>
                <Post/>
                <Post/>
               
                
                
                {/*Header*/}

            </div>
        </>
    )
}