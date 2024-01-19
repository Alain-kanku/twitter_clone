import React from 'react'
import "../css/Widgets.css"
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Widgets() {
  
    return (
    <div className='Widgets'>
        <div className="Widgets__one">
             <SearchIcon className="Widgets__SearchIcon"/>
             <input placeholder='Search Twitter' type="text" />
        </div>
        
        <div className="Widgets__widgetsContainer">
          
        <div className="Widgets__two">
            <h3>Trends for you</h3>
            <SettingsOutlinedIcon fontSize='large'/>  
        </div>
        <div className="Widgets__three">
             <SearchIcon className="Widgets__SearchIcon"/>
             <input placeholder='Search Twitter' type="text" />
        </div>
          {/* <TwitterTweetEmbed tweetId={"858551177860055040"} />

          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        /> */}
        </div>
    </div>
  )
}
