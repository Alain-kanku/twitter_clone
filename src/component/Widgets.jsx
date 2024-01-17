import React from 'react'
import "../css/Widgets.css"
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

export default function Widgets() {
  
    return (
    <div className='Widgets'>
        <div className="Widgets__input">
             <SearchIcon className="Widgets__SearchIcon"/>
             <input placeholder='Search Twitter' type="text" />
        </div>
        <div className="Widgets__widgetsContainer">
          <h2>What's Happening</h2>
          
          <TwitterTweetEmbed tweetId={"858551177860055040"} />

          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
        </div>
    </div>
  )
}
