import React from 'react'
import "../css/TweetBox.css"
import { Avatar, Button } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';

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

        </form>
        <div className="tweetbox_iconsWidget_buttonTweet">
            <div className="tweetbox_iconsWidget">
            <ImageIcon fontSize="medium" />
            <GifIcon fontSize="medium" />
            <AlignHorizontalLeftIcon fontSize="medium" />
            <AddReactionIcon fontSize="medium" />
            <EventRepeatIcon fontSize="medium" />
            </div>
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </div>
    </div>

}

