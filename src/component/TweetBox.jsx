import React from 'react'
import "../css/TweetBox.css"
import { Avatar, Button } from '@mui/material';

export default function TweetBox() {

    return <div className='tweetBox'>
        <form >
            <div className="tweetBox__input">
                <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                <input
                    // onChange={(e) => setTweetMessage(e.target.value)}
                    // value={tweetMessage}
                    placeholder="What's happening?"
                    type="text"
                />

            </div>
            <input
                className="tweetBox__imageInput"
                // onChange={(e) => setTweetMessage(e.target.value)}
                // value={tweetMessage}
                placeholder="Optional : enter image URL"
                type="text"
            />
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>

}

